/**
 * Google Scholar Metrics Updater
 * Fetches metrics from Google Scholar and updates the website automatically
 * Uses Puppeteer for reliable data extraction from JavaScript-rendered pages
 */

const fs = require('fs').promises;
const path = require('path');

// Configuration
const SCHOLAR_PROFILE_ID = 'FkAGB3MAAAAJ';
const SCHOLAR_URL = `https://scholar.google.com/citations?user=${SCHOLAR_PROFILE_ID}&hl=en`;

// Try to load Puppeteer (optional, falls back to HTTP if not available)
let puppeteer = null;
try {
  puppeteer = require('puppeteer');
} catch (error) {
  console.log('ℹ️ Puppeteer not available, will use HTTP method');
}

/**
 * Loads existing metrics from file as fallback
 */
async function loadExistingMetrics() {
  try {
    const metadataPath = path.join(__dirname, '../public/scholar-metadata.json');
    const data = await fs.readFile(metadataPath, 'utf8');
    const existing = JSON.parse(data);
    console.log('📂 Loaded existing metrics as fallback:', existing);
    return existing;
  } catch (error) {
    console.warn('⚠️ Could not load existing metrics, using minimal fallback');
    return {
      citations: 0,
      hIndex: 0,
      i10Index: 0,
      publications: 0,
      lastUpdated: new Date().toISOString(),
      profileUrl: SCHOLAR_URL
    };
  }
}

/**
 * Fetches Google Scholar metrics using Puppeteer (browser automation)
 * This is the preferred method as it handles JavaScript-rendered content
 */
async function fetchScholarMetricsWithPuppeteer() {
  console.log('🌐 Using Puppeteer to fetch Google Scholar metrics...');

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });

  try {
    const page = await browser.newPage();

    // Set a reasonable viewport size
    await page.setViewport({ width: 1920, height: 1080 });

    // Set user agent to avoid detection
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    console.log('📡 Navigating to Google Scholar...');
    await page.goto(SCHOLAR_URL, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait for the metrics to load (Google Scholar uses specific class names)
    console.log('⏳ Waiting for page content to load...');
    await page.waitForSelector('.gsc_rsb_std, .gsc_a_c, [id*="gsc_rsb"]', { timeout: 10000 }).catch(() => {
      console.log('⚠️ Metrics selectors not found, continuing anyway...');
    });

    // Wait a bit more for any dynamic content (using setTimeout instead of waitForTimeout)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Extract metrics from the page
    console.log('🔍 Extracting metrics from page...');

    const metrics = await page.evaluate(() => {
      const result = {
        citations: null,
        hIndex: null,
        i10Index: null,
        publications: null
      };

      // Try to find citations (multiple possible locations)
      const citationsSelectors = [
        '.gsc_rsb_std:contains("Cited by")',
        '[id*="gsc_rsb"] td:contains("Cited by")',
        '.gsc_a_c',
        'td.gsc_rsb_std'
      ];

      // Look for "Cited by" text and get the number
      const allText = document.body.innerText || document.body.textContent || '';
      const citedByMatch = allText.match(/Cited by[^\d]*(\d+)/i);
      if (citedByMatch) {
        result.citations = parseInt(citedByMatch[1]);
      }

      // Look for h-index
      const hIndexMatch = allText.match(/h-index[^\d]*(\d+)/i);
      if (hIndexMatch) {
        result.hIndex = parseInt(hIndexMatch[1]);
      }

      // Look for i10-index
      const i10Match = allText.match(/i10-index[^\d]*(\d+)/i);
      if (i10Match) {
        result.i10Index = parseInt(i10Match[1]);
      }

      // Try to find metrics in table cells
      const tableCells = Array.from(document.querySelectorAll('td.gsc_rsb_std'));
      tableCells.forEach((cell, index) => {
        const text = cell.textContent || '';
        const value = parseInt(text.trim());
        if (!isNaN(value) && value > 0) {
          // Check the label in previous cells or row
          const row = cell.closest('tr');
          if (row) {
            const labelCell = row.querySelector('td:first-child');
            if (labelCell) {
              const label = labelCell.textContent || '';
              if (label.includes('Cited by') || label.includes('Citations')) {
                result.citations = value;
              } else if (label.includes('h-index')) {
                result.hIndex = value;
              } else if (label.includes('i10-index')) {
                result.i10Index = value;
              }
            }
          }
        }
      });

      // Try to get publication count
      const pubElements = document.querySelectorAll('.gsc_a_tr, .gsc_a_t');
      if (pubElements.length > 0) {
        result.publications = pubElements.length;
      }

      return result;
    });

    console.log('📊 Extracted metrics:', metrics);

    // Validate and return
    if (metrics.citations !== null || metrics.hIndex !== null || metrics.i10Index !== null) {
      return {
        citations: metrics.citations || 0,
        hIndex: metrics.hIndex || 0,
        i10Index: metrics.i10Index || 0,
        publications: metrics.publications || 10,
        lastUpdated: new Date().toISOString(),
        profileUrl: SCHOLAR_URL
      };
    }

    return null;
  } finally {
    await browser.close();
  }
}

/**
 * Fetches Google Scholar metrics using HTTP request (fallback method)
 * This is used when Puppeteer is not available or fails
 */
async function fetchScholarMetricsWithHTTP() {
  console.log('📡 Using HTTP method to fetch Google Scholar metrics...');

  try {
    // Load existing metrics as fallback
    const fallbackMetrics = await loadExistingMetrics();

    let metrics = {
      citations: fallbackMetrics.citations,
      hIndex: fallbackMetrics.hIndex,
      i10Index: fallbackMetrics.i10Index,
      publications: fallbackMetrics.publications || 10
    };

    // Attempt to fetch real data using HTTP request with proper headers
    try {
      const https = require('https');
      const url = require('url');
      const parsedUrl = url.parse(SCHOLAR_URL);

      const options = {
        hostname: parsedUrl.hostname,
        path: parsedUrl.path,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
        }
      };

      const response = await new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
          // Handle redirects (max 1 redirect to avoid loops)
          if (res.statusCode === 301 || res.statusCode === 302) {
            const redirectUrl = res.headers.location;
            console.log(`🔄 Redirect detected to: ${redirectUrl}`);
            // For now, just log and continue - Google Scholar usually doesn't redirect
            // If needed, we can implement proper redirect following later
          }

          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
              resolve(data);
            } else {
              reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
            }
          });
        });

        req.on('error', reject);
        req.setTimeout(15000, () => {
          req.destroy();
          reject(new Error('Request timeout after 15 seconds'));
        });
        req.end();
      });

      // Debug: Check response length and content type
      console.log(`📄 Response length: ${response.length} characters`);
      if (response.length < 1000) {
        console.warn('⚠️ Response seems too short, might be an error page');
        console.log('📄 First 500 chars:', response.substring(0, 500));
      }

      // Enhanced regex patterns to extract metrics from HTML
      // Google Scholar uses various formats, so we try multiple patterns
      const citationsPatterns = [
        /Cited by[^\d]*(\d+)/i,
        /"cited_by_count":\s*(\d+)/i,
        /Citations[^<]*<[^>]*>(\d+)/i,
        /<td[^>]*>Cited by<\/td>\s*<td[^>]*>(\d+)/i,
        /gsc_a_c[^>]*>(\d+)[^<]*Cited by/i,
        /gsc_rsb_std[^>]*>(\d+)[^<]*Cited by/i,
        /class="gsc_rsb_std"[^>]*>(\d+)/i,
      ];

      const hIndexPatterns = [
        /h-index[^<]*<[^>]*>(\d+)/i,
        /"h_index":\s*(\d+)/i,
        /h-index<\/td><td[^>]*>(\d+)/i,
        /<td[^>]*>h-index<\/td>\s*<td[^>]*>(\d+)/i,
        /gsc_rsb_std[^>]*>(\d+)[^<]*h-index/i,
        /class="gsc_rsb_std"[^>]*>(\d+)/i,
      ];

      const i10IndexPatterns = [
        /i10-index[^<]*<[^>]*>(\d+)/i,
        /"i10_index":\s*(\d+)/i,
        /i10-index<\/td><td[^>]*>(\d+)/i,
        /<td[^>]*>i10-index<\/td>\s*<td[^>]*>(\d+)/i,
        /gsc_rsb_std[^>]*>(\d+)[^<]*i10-index/i,
      ];

      let foundCitations = false;
      let foundHIndex = false;
      let foundI10Index = false;

      // Try to extract citations
      for (const pattern of citationsPatterns) {
        const match = response.match(pattern);
        if (match) {
          const value = parseInt(match[1]);
          if (!isNaN(value) && value > 0) {
            metrics.citations = value;
            console.log(`✅ Found citations: ${metrics.citations} (pattern: ${pattern})`);
            foundCitations = true;
            break;
          }
        }
      }

      // Try to extract h-index
      for (const pattern of hIndexPatterns) {
        const match = response.match(pattern);
        if (match) {
          const value = parseInt(match[1]);
          if (!isNaN(value) && value >= 0) {
            metrics.hIndex = value;
            console.log(`✅ Found h-index: ${metrics.hIndex} (pattern: ${pattern})`);
            foundHIndex = true;
            break;
          }
        }
      }

      // Try to extract i10-index
      for (const pattern of i10IndexPatterns) {
        const match = response.match(pattern);
        if (match) {
          const value = parseInt(match[1]);
          if (!isNaN(value) && value >= 0) {
            metrics.i10Index = value;
            console.log(`✅ Found i10-index: ${metrics.i10Index} (pattern: ${pattern})`);
            foundI10Index = true;
            break;
          }
        }
      }

      // Check if we successfully extracted any new data
      const hasNewData = foundCitations || foundHIndex || foundI10Index;

      if (hasNewData) {
        console.log('✅ Successfully fetched and parsed real metrics:', {
          citations: metrics.citations,
          hIndex: metrics.hIndex,
          i10Index: metrics.i10Index,
          found: { citations: foundCitations, hIndex: foundHIndex, i10Index: foundI10Index }
        });
        return {
          citations: metrics.citations,
          hIndex: metrics.hIndex,
          i10Index: metrics.i10Index,
          publications: metrics.publications || 10,
          lastUpdated: new Date().toISOString(),
          profileUrl: SCHOLAR_URL
        };
      } else {
        console.warn('⚠️ Could not extract metrics from response');
        console.log('🔍 Trying to find any numeric patterns in response...');

        // Debug: Look for any numbers near "cited" or "h-index" keywords
        const citedMatches = response.match(/[Cc]ited[^0-9]*(\d+)/gi);
        const hIndexMatches = response.match(/h[-\s]*index[^0-9]*(\d+)/gi);
        if (citedMatches) {
          console.log('🔍 Found "cited" patterns:', citedMatches.slice(0, 5));
        }
        if (hIndexMatches) {
          console.log('🔍 Found "h-index" patterns:', hIndexMatches.slice(0, 5));
        }

        // Save a sample of the response for debugging
        if (process.env.DEBUG_HTML === 'true' || process.argv.includes('--debug')) {
          const debugPath = path.join(__dirname, '../debug-scholar-response.html');
          await fs.writeFile(debugPath, response, 'utf8');
          console.log('💾 Saved full response to:', debugPath);
          console.log('💡 You can inspect this file to see the actual HTML structure');
        }
      }

      return null;
    } catch (fetchError) {
      console.warn('⚠️ Failed to fetch live data from Google Scholar:', fetchError.message);
      return null;
    }
  } catch (error) {
    console.warn('⚠️ HTTP method failed:', error.message);
    return null;
  }
}

/**
 * Main function to fetch Google Scholar metrics
 * Tries Puppeteer first, falls back to HTTP, then to existing file
 */
async function fetchScholarMetrics() {
  try {
    console.log('📊 Fetching Google Scholar metrics from:', SCHOLAR_URL);

    // Load existing metrics as fallback (not hardcoded!)
    const fallbackMetrics = await loadExistingMetrics();

    let metrics = {
      ...fallbackMetrics,
      // Keep existing timestamp by default (only update if we successfully fetch new data)
      lastUpdated: fallbackMetrics.lastUpdated || new Date().toISOString(),
      profileUrl: SCHOLAR_URL
    };

    // Try Puppeteer first (if available)
    if (puppeteer) {
      try {
        const puppeteerMetrics = await fetchScholarMetricsWithPuppeteer();
        if (puppeteerMetrics && (puppeteerMetrics.citations > 0 || puppeteerMetrics.hIndex > 0)) {
          console.log('✅ Successfully fetched metrics using Puppeteer!');
          return puppeteerMetrics;
        } else {
          console.warn('⚠️ Puppeteer returned invalid metrics, trying HTTP fallback...');
        }
      } catch (puppeteerError) {
        console.warn('⚠️ Puppeteer failed:', puppeteerError.message);
        console.log('📡 Falling back to HTTP method...');
      }
    }

    // Try HTTP method as fallback
    try {
      const httpMetrics = await fetchScholarMetricsWithHTTP();
      if (httpMetrics && (httpMetrics.citations !== fallbackMetrics.citations ||
        httpMetrics.hIndex !== fallbackMetrics.hIndex ||
        httpMetrics.i10Index !== fallbackMetrics.i10Index)) {
        console.log('✅ Successfully fetched metrics using HTTP!');
        return httpMetrics;
      }
    } catch (httpError) {
      console.warn('⚠️ HTTP method also failed:', httpError.message);
    }

    // If all methods fail, use existing metrics
    console.log('📂 Using existing metrics from file as fallback');
    console.log('📊 Fallback metrics:', metrics);
    return metrics;

  } catch (error) {
    console.error('❌ Error fetching Scholar metrics:', error);
    // Return fallback instead of throwing
    const fallback = await loadExistingMetrics();
    return {
      ...fallback,
      // Keep existing timestamp on error
      lastUpdated: fallback.lastUpdated || new Date().toISOString(),
      profileUrl: SCHOLAR_URL
    };
  }
}

/**
 * Updates the metadata JSON file with new metrics
 * The React components read from this file, so no need to update components directly
 */
async function updateMetricsFile(metrics) {
  try {
    const metadataPath = path.join(__dirname, '../public/scholar-metadata.json');
    // Don't force update the timestamp here - rely on the fetcher to set it if data is fresh
    const updatedMetrics = {
      ...metrics
    };

    await fs.writeFile(metadataPath, JSON.stringify(updatedMetrics, null, 2), 'utf8');
    console.log('✅ Updated metadata file:', metadataPath);
    console.log('📊 Metrics saved:', {
      citations: updatedMetrics.citations,
      hIndex: updatedMetrics.hIndex,
      i10Index: updatedMetrics.i10Index,
      publications: updatedMetrics.publications,
      lastUpdated: updatedMetrics.lastUpdated
    });
  } catch (error) {
    console.error('❌ Error updating metadata file:', error);
    throw error;
  }
}

/**
 * Creates a commit with the updated metrics
 */
async function commitChanges(metrics) {
  const { execSync } = require('child_process');

  try {
    // Check if there are changes
    const status = execSync('git status --porcelain', { encoding: 'utf8' });

    if (status.trim()) {
      execSync('git add .');
      execSync(`git commit -m "chore: auto-update Google Scholar metrics
      
Citations: ${metrics.citations}
h-index: ${metrics.hIndex}
i10-index: ${metrics.i10Index}
Publications: ${metrics.publications}+

Last updated: ${new Date().toLocaleDateString()}"`);

      console.log('✅ Committed changes to git');
      return true;
    } else {
      console.log('ℹ️ No changes to commit');
      return false;
    }
  } catch (error) {
    console.error('❌ Error committing changes:', error);
    throw error;
  }
}

/**
 * Main function to update all metrics
 */
async function main() {
  try {
    console.log('🚀 Starting Google Scholar metrics update...');
    console.log('📅 Date:', new Date().toISOString());

    const metrics = await fetchScholarMetrics();
    await updateMetricsFile(metrics);

    // Only commit if AUTO_COMMIT is true and we're NOT in GitHub Actions (which handles it separately)
    // Or if we specifically want the script to handle it
    if (process.env.AUTO_COMMIT === 'true' && process.env.GITHUB_ACTIONS !== 'true') {
      await commitChanges(metrics);
    }

    console.log('🎉 Successfully updated Google Scholar metrics!');
    console.log(`📊 Final metrics: Citations: ${metrics.citations}, h-index: ${metrics.hIndex}, i10-index: ${metrics.i10Index}`);

  } catch (error) {
    console.error('💥 Failed to update metrics:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { fetchScholarMetrics, updateMetricsFile, loadExistingMetrics, main }; 