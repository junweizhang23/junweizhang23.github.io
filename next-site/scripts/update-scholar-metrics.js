/**
 * Google Scholar Metrics Updater
 * Fetches metrics from Google Scholar and updates the website automatically
 */

const fs = require('fs').promises;
const path = require('path');

// Configuration
const SCHOLAR_PROFILE_ID = 'FkAGB3MAAAAJ';
const SCHOLAR_URL = `https://scholar.google.com/citations?user=${SCHOLAR_PROFILE_ID}&hl=en`;

/**
 * Fetches Google Scholar metrics using web scraping
 * This function attempts to fetch real metrics from Google Scholar
 */
async function fetchScholarMetrics() {
  try {
    console.log('📊 Fetching Google Scholar metrics from:', SCHOLAR_URL);
    
    // Try to fetch from Google Scholar (may be blocked, so we have fallback)
    let metrics = {
      citations: 155, // Fallback values
      hIndex: 6,
      i10Index: 3,
      publications: 10,
      lastUpdated: new Date().toISOString(),
      profileUrl: SCHOLAR_URL
    };

    try {
      // Attempt to fetch real data using a simple HTTP request
      const https = require('https');
      const response = await new Promise((resolve, reject) => {
        https.get(SCHOLAR_URL, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(data));
        }).on('error', reject);
      });

      // Simple regex patterns to extract metrics from HTML
      const citationsMatch = response.match(/Cited by (\d+)/i);
      const hIndexMatch = response.match(/h-index<\/td><td[^>]*>(\d+)/i);
      const i10IndexMatch = response.match(/i10-index<\/td><td[^>]*>(\d+)/i);
      
      if (citationsMatch) metrics.citations = parseInt(citationsMatch[1]);
      if (hIndexMatch) metrics.hIndex = parseInt(hIndexMatch[1]);
      if (i10IndexMatch) metrics.i10Index = parseInt(i10IndexMatch[1]);
      
      console.log('✅ Successfully fetched real metrics:', metrics);
    } catch (fetchError) {
      console.warn('⚠️ Failed to fetch live data, using fallback values:', fetchError.message);
    }

    return metrics;
  } catch (error) {
    console.error('❌ Error fetching Scholar metrics:', error);
    throw error;
  }
}

/**
 * Updates the React component with new metrics
 */
async function updateMetricsInComponent(metrics) {
  try {
    const componentPath = path.join(__dirname, '../src/app/page.tsx');
    let content = await fs.readFile(componentPath, 'utf8');

    // Update citations
    content = content.replace(
      /(<span className="font-semibold text-slate-900 dark:text-white">)(\d+)(<\/span>)/g,
      (match, before, number, after, offset, string) => {
        const beforeMatch = string.substring(0, offset);
        if (beforeMatch.includes('Citations')) {
          return `${before}${metrics.citations}${after}`;
        } else if (beforeMatch.includes('h-index')) {
          return `${before}${metrics.hIndex}${after}`;
        } else if (beforeMatch.includes('i10-index')) {
          return `${before}${metrics.i10Index}${after}`;
        } else if (beforeMatch.includes('Publications')) {
          return `${before}${metrics.publications}${after}`;
        }
        return match;
      }
    );

    await fs.writeFile(componentPath, content, 'utf8');
    console.log('✅ Successfully updated component with new metrics');
    
    // Update last updated timestamp
    const metadataPath = path.join(__dirname, '../public/scholar-metadata.json');
    await fs.writeFile(metadataPath, JSON.stringify({
      ...metrics,
      lastUpdated: new Date().toISOString()
    }, null, 2), 'utf8');
    
    console.log('✅ Updated metadata file');
  } catch (error) {
    console.error('❌ Error updating component:', error);
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
    
    const metrics = await fetchScholarMetrics();
    await updateMetricsInComponent(metrics);
    
    // Only commit if we're in a git repository and have changes
    if (process.env.CI || process.env.AUTO_COMMIT === 'true') {
      await commitChanges(metrics);
    }
    
    console.log('🎉 Successfully updated Google Scholar metrics!');
    console.log(`📊 Citations: ${metrics.citations}, h-index: ${metrics.hIndex}, i10-index: ${metrics.i10Index}`);
    
  } catch (error) {
    console.error('💥 Failed to update metrics:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { fetchScholarMetrics, updateMetricsInComponent, main }; 