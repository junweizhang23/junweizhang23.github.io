/**
 * Google Scholar Metrics Updater
 * Fetches metrics from Google Scholar and updates the website automatically
 * Uses Puppeteer for reliable data extraction from JavaScript-rendered pages
 * 
 * IMPORTANT: Google Scholar displays metrics in a table with two columns:
 *   - "All" (all-time metrics) — this is what we want
 *   - "Since 2021" (recent metrics)
 * The script must extract the "All" column values, NOT the "Since 2021" column.
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
 * This is the preferred method as it handles JavaScript-rendered content.
 * 
 * Google Scholar metrics table structure:
 *   Row 0: Citations  | <all-time value> | <since-2021 value>
 *   Row 1: h-index    | <all-time value> | <since-2021 value>
 *   Row 2: i10-index  | <all-time value> | <since-2021 value>
 * 
 * We need the FIRST numeric column (index 0 of gsc_rsb_std cells per row),
 * which corresponds to the "All" column.
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

    // Wait for the metrics table to load
    console.log('⏳ Waiting for page content to load...');
    await page.waitForSelector('td.gsc_rsb_std', { timeout: 10000 }).catch(() => {
      console.log('⚠️ Metrics table cells not found, continuing anyway...');
    });

    // Wait a bit more for any dynamic content
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

      // Google Scholar metrics table has rows with class gsc_rsb_std cells.
      // The table structure is:
      //   <tr> <td>Citations</td> <td class="gsc_rsb_std">ALL_VALUE</td> <td class="gsc_rsb_std">SINCE_VALUE</td> </tr>
      //   <tr> <td>h-index</td>   <td class="gsc_rsb_std">ALL_VALUE</td> <td class="gsc_rsb_std">SINCE_VALUE</td> </tr>
      //   <tr> <td>i10-index</td> <td class="gsc_rsb_std">ALL_VALUE</td> <td class="gsc_rsb_std">SINCE_VALUE</td> </tr>
      //
      // We want the FIRST gsc_rsb_std in each row (the "All" column).

      const rows = document.querySelectorAll('#gsc_rsb_st tr');
      rows.forEach((row) => {
        const headerCell = row.querySelector('td.gsc_rsb_sc1');
        const valueCells = row.querySelectorAll('td.gsc_rsb_std');
        
        if (headerCell && valueCells.length >= 1) {
          const label = (headerCell.textContent || '').trim().toLowerCase();
          // First gsc_rsb_std cell = "All" column
          const allTimeValue = parseInt((valueCells[0].textContent || '').trim());
          
          if (!isNaN(allTimeValue)) {
            if (label.includes('citation')) {
              result.citations = allTimeValue;
            } else if (label.includes('h-index')) {
              result.hIndex = allTimeValue;
            } else if (label.includes('i10-index')) {
              result.i10Index = allTimeValue;
            }
          }
        }
      });

      // Fallback: if the table selector approach didn't work, try generic approach
      if (result.citations === null && result.hIndex === null) {
        const allCells = Array.from(document.querySelectorAll('td.gsc_rsb_std'));
        // Cells appear in order: citations-all, citations-since, hindex-all, hindex-since, i10-all, i10-since
        if (allCells.length >= 6) {
          const citAll = parseInt((allCells[0].textContent || '').trim());
          const hAll = parseInt((allCells[2].textContent || '').trim());
          const i10All = parseInt((allCells[4].textContent || '').trim());
          
          if (!isNaN(citAll)) result.citations = citAll;
          if (!isNaN(hAll)) result.hIndex = hAll;
          if (!isNaN(i10All)) result.i10Index = i10All;
        }
      }

      // Try to get publication count
      const pubElements = document.querySelectorAll('.gsc_a_tr');
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
 * This is used when Puppeteer is not available or fails.
 * 
 * NOTE: The HTTP method parses raw HTML. Google Scholar's metrics table
 * has cells in order: All-time value first, then Since-YYYY value.
 * The regex patterns below attempt to extract the "All" column values.
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
          'Accept-Encoding': 'identity',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
        }
      };

      const response = await new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            if (res.statusCode === 200) {
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

      console.log(`📄 Response length: ${response.length} characters`);

      // Parse the metrics table from HTML
      // The table has rows like:
      //   <td class="gsc_rsb_sc1"><a ...>Citations</a></td>
      //   <td class="gsc_rsb_std">155</td>   <!-- All -->
      //   <td class="gsc_rsb_std">100</td>   <!-- Since 2021 -->
      //
      // Strategy: find all gsc_rsb_std values and take every other one (index 0, 2, 4 = All column)
      const stdPattern = /class="gsc_rsb_std"[^>]*>(\d+)<\/td>/g;
      const allValues = [];
      let match;
      while ((match = stdPattern.exec(response)) !== null) {
        allValues.push(parseInt(match[1]));
      }

      console.log('🔍 All gsc_rsb_std values found:', allValues);

      if (allValues.length >= 6) {
        // Values are in order: citations-all, citations-since, hindex-all, hindex-since, i10-all, i10-since
        metrics.citations = allValues[0];
        metrics.hIndex = allValues[2];
        metrics.i10Index = allValues[4];
        
        console.log(`✅ Extracted ALL-TIME metrics: citations=${metrics.citations}, h-index=${metrics.hIndex}, i10-index=${metrics.i10Index}`);
        
        return {
          citations: metrics.citations,
          hIndex: metrics.hIndex,
          i10Index: metrics.i10Index,
          publications: metrics.publications || 10,
          lastUpdated: new Date().toISOString(),
          profileUrl: SCHOLAR_URL
        };
      } else if (allValues.length >= 2) {
        // Partial data - take what we can, but be cautious
        console.warn('⚠️ Found fewer values than expected, using cautiously');
        metrics.citations = allValues[0];
        if (allValues.length >= 4) metrics.hIndex = allValues[2];
        
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

        // Save a sample of the response for debugging
        if (process.env.DEBUG_HTML === 'true' || process.argv.includes('--debug')) {
          const debugPath = path.join(__dirname, '../debug-scholar-response.html');
          await fs.writeFile(debugPath, response, 'utf8');
          console.log('💾 Saved full response to:', debugPath);
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
      if (httpMetrics && (httpMetrics.citations > 0 || httpMetrics.hIndex > 0)) {
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
    const fallback = await loadExistingMetrics();
    return {
      ...fallback,
      lastUpdated: fallback.lastUpdated || new Date().toISOString(),
      profileUrl: SCHOLAR_URL
    };
  }
}

/**
 * Updates the metadata JSON files with new metrics
 * Updates both public/scholar-metadata.json (for Next.js) and root scholar-metadata.json (for deployed site)
 */
async function updateMetricsFile(metrics) {
  try {
    const publicPath = path.join(__dirname, '../public/scholar-metadata.json');
    const rootPath = path.join(__dirname, '../../scholar-metadata.json');
    
    const updatedMetrics = { ...metrics };

    await fs.writeFile(publicPath, JSON.stringify(updatedMetrics, null, 2), 'utf8');
    console.log('✅ Updated public metadata file:', publicPath);
    
    // Also update root-level copy
    try {
      await fs.writeFile(rootPath, JSON.stringify(updatedMetrics, null, 2), 'utf8');
      console.log('✅ Updated root metadata file:', rootPath);
    } catch (rootError) {
      console.warn('⚠️ Could not update root metadata file:', rootError.message);
    }
    
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
 * Main function to update all metrics
 */
async function main() {
  try {
    console.log('🚀 Starting Google Scholar metrics update...');
    console.log('📅 Date:', new Date().toISOString());

    const metrics = await fetchScholarMetrics();
    await updateMetricsFile(metrics);

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
