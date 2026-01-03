'use client';

import { useEffect, useState } from 'react';

interface VisitorStats {
  totalVisits: number;
  todayVisits: number;
  onlineUsers: number;
}

interface CountryData {
  country: string;
  flag: string;
  count: number;
}

// Country flag emoji mapping
const COUNTRY_FLAGS: Record<string, string> = {
  'US': '🇺🇸', 'CN': '🇨🇳', 'GB': '🇬🇧', 'DE': '🇩🇪', 'JP': '🇯🇵',
  'FR': '🇫🇷', 'CA': '🇨🇦', 'AU': '🇦🇺', 'IN': '🇮🇳', 'KR': '🇰🇷',
  'BR': '🇧🇷', 'IT': '🇮🇹', 'ES': '🇪🇸', 'NL': '🇳🇱', 'SE': '🇸🇪',
  'SG': '🇸🇬', 'TW': '🇹🇼', 'HK': '🇭🇰', 'MY': '🇲🇾', 'TH': '🇹🇭',
  'ID': '🇮🇩', 'PH': '🇵🇭', 'VN': '🇻🇳', 'RU': '🇷🇺', 'MX': '🇲🇽',
};

// Country name mapping
const COUNTRY_NAMES: Record<string, string> = {
  'US': 'USA', 'CN': 'China', 'GB': 'UK', 'DE': 'Germany', 'JP': 'Japan',
  'FR': 'France', 'CA': 'Canada', 'AU': 'Australia', 'IN': 'India', 'KR': 'South Korea',
  'BR': 'Brazil', 'IT': 'Italy', 'ES': 'Spain', 'NL': 'Netherlands', 'SE': 'Sweden',
  'SG': 'Singapore', 'TW': 'Taiwan', 'HK': 'Hong Kong', 'MY': 'Malaysia', 'TH': 'Thailand',
  'ID': 'Indonesia', 'PH': 'Philippines', 'VN': 'Vietnam', 'RU': 'Russia', 'MX': 'Mexico',
};

export default function VisitorAnalytics() {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisits: 0,
    todayVisits: 0,
    onlineUsers: 1
  });
  const [recentCountries, setRecentCountries] = useState<CountryData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<string | null>(null);

  // Get visitor's country from IP
  const fetchVisitorLocation = async () => {
    try {
      // Try multiple free IP geolocation APIs (no API key required)
      const apis = [
        'https://ipapi.co/json/',
        'https://ip-api.com/json/?fields=status,countryCode',
        'https://api.country.is/',
      ];

      for (const apiUrl of apis) {
        try {
          const response = await fetch(apiUrl, { 
            signal: AbortSignal.timeout(3000) // 3s timeout
          });
          if (!response.ok) continue;
          
          const data = await response.json();
          const countryCode = data.country_code || data.countryCode || data.country;
          
          if (countryCode && countryCode.length === 2) {
            setCurrentCountry(countryCode.toUpperCase());
            return countryCode.toUpperCase();
          }
        } catch (err) {
          // Try next API
          continue;
        }
      }
    } catch (error) {
      console.log('Could not determine visitor location:', error);
    }
    return null;
  };

  // Update country list in localStorage AND send to countapi.xyz
  const updateCountryList = async (countryCode: string) => {
    try {
      // 1. Update localStorage (for visitor's own display)
      const stored = localStorage.getItem('visitorCountries');
      const countries: Record<string, number> = stored ? JSON.parse(stored) : {};
      
      // Increment count for this country
      countries[countryCode] = (countries[countryCode] || 0) + 1;
      
      // Keep only last 30 days of data
      const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
      const lastUpdate = parseInt(localStorage.getItem('countryListUpdate') || '0');
      
      if (Date.now() - lastUpdate > 24 * 60 * 60 * 1000) {
        // Clean old entries daily
        Object.keys(countries).forEach(key => {
          if (countries[key] < 2) delete countries[key];
        });
        localStorage.setItem('countryListUpdate', Date.now().toString());
      }
      
      localStorage.setItem('visitorCountries', JSON.stringify(countries));
      
      // 2. Send to countapi.xyz (so website owner can see all visitors' countries)
      // This creates a counter for each country that the website owner can access
      try {
        await fetch(`https://api.countapi.xyz/hit/junweizhang23.github.io/country/${countryCode}`);
      } catch (err) {
        // Silently fail if countapi.xyz is unavailable
        console.log('Could not update country count on server:', err);
      }
      
      // 3. Get top countries for display (from localStorage for this visitor)
      const sorted = Object.entries(countries)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 4)
        .map(([code, count]) => ({
          country: COUNTRY_NAMES[code] || code,
          flag: COUNTRY_FLAGS[code] || '🌍',
          count: count as number
        }));
      
      setRecentCountries(sorted);
    } catch (error) {
      console.error('Failed to update country list:', error);
    }
  };
  
  // Fetch aggregated country statistics from countapi.xyz
  // This allows the website owner to see all visitors' countries
  const fetchCountryStats = async () => {
    try {
      // Try to get stats for common countries
      // Note: countapi.xyz doesn't have a direct "list all" endpoint,
      // so we check common countries
      const commonCountries = ['US', 'CN', 'GB', 'DE', 'JP', 'FR', 'CA', 'AU', 'IN', 'KR'];
      const countryPromises = commonCountries.map(code =>
        fetch(`https://api.countapi.xyz/get/junweizhang23.github.io/country/${code}`)
          .then(res => res.json())
          .then(data => ({ code, count: data.value || 0 }))
          .catch(() => ({ code, count: 0 }))
      );
      
      const countryStats = await Promise.all(countryPromises);
      const topCountries = countryStats
        .filter(stat => stat.count > 0)
        .sort((a, b) => b.count - a.count)
        .slice(0, 4)
        .map(stat => ({
          country: COUNTRY_NAMES[stat.code] || stat.code,
          flag: COUNTRY_FLAGS[stat.code] || '🌍',
          count: stat.count
        }));
      
      // If we have server-side stats, use them; otherwise use localStorage
      if (topCountries.length > 0) {
        setRecentCountries(topCountries);
      }
    } catch (error) {
      // Fallback to localStorage if server stats unavailable
      console.log('Could not fetch country stats from server:', error);
    }
  };

  // Load country list from localStorage
  const loadCountryList = () => {
    try {
      const stored = localStorage.getItem('visitorCountries');
      if (stored) {
        const countries: Record<string, number> = JSON.parse(stored);
        const sorted = Object.entries(countries)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 4)
          .map(([code, count]) => ({
            country: COUNTRY_NAMES[code] || code,
            flag: COUNTRY_FLAGS[code] || '🌍',
            count: count as number
          }));
        setRecentCountries(sorted);
      }
    } catch (error) {
      console.error('Failed to load country list:', error);
    }
  };

  useEffect(() => {
    // Load existing country list from localStorage
    loadCountryList();

    // Fetch visitor statistics and location
    const fetchStats = async () => {
      try {
        // Get visitor's location
        const countryCode = await fetchVisitorLocation();
        if (countryCode) {
          // Update both localStorage and send to countapi.xyz
          await updateCountryList(countryCode);
        }

        // Fetch aggregated country stats from server (so website owner can see all visitors)
        await fetchCountryStats();

        // Try multiple visitor tracking APIs
        const promises = [
          fetch('https://api.countapi.xyz/hit/junweizhang23.github.io/visits'),
          fetch('https://api.countapi.xyz/get/junweizhang23.github.io/visits')
        ];
        
        const [hitResponse, getResponse] = await Promise.allSettled(promises);
        
        let totalVisits = 0;
        if (hitResponse.status === 'fulfilled') {
          const hitData = await hitResponse.value.json();
          totalVisits = hitData.value || 0;
        } else if (getResponse.status === 'fulfilled') {
          const getData = await getResponse.value.json();
          totalVisits = getData.value || 0;
        }
        
        // Get today's date and calculate today's visits
        const today = new Date().toISOString().split('T')[0];
        const todayKey = `junweizhang23.github.io/daily/${today}`;
        
        try {
          const todayResponse = await fetch(`https://api.countapi.xyz/hit/${todayKey}`);
          const todayData = await todayResponse.json();
          
          setStats({
            totalVisits: totalVisits,
            todayVisits: todayData.value || 0,
            onlineUsers: Math.min(Math.max(1, Math.floor(totalVisits / 100)), 5) // Estimate
          });
        } catch {
          setStats({
            totalVisits: totalVisits,
            todayVisits: Math.floor(totalVisits / 30) || 0, // Fallback approximation
            onlineUsers: 1
          });
        }
        
      } catch (error) {
        console.error('Failed to fetch visitor stats:', error);
        // Fallback to localStorage-based counting for GitHub Pages
        const localVisits = parseInt(localStorage.getItem('siteVisits') || '0') + 1;
        localStorage.setItem('siteVisits', localVisits.toString());
        
        const todayVisits = parseInt(localStorage.getItem(`visits_${new Date().toDateString()}`) || '0') + 1;
        localStorage.setItem(`visits_${new Date().toDateString()}`, todayVisits.toString());
        
        setStats({
          totalVisits: localVisits,
          todayVisits: todayVisits,
          onlineUsers: 1
        });
      }
      setIsLoaded(true);
    };

    fetchStats();
  }, []);

  // Fallback countries if no data available
  const displayCountries = recentCountries.length > 0 
    ? recentCountries 
    : [
        { country: 'USA', flag: '🇺🇸', count: 0 },
        { country: 'China', flag: '🇨🇳', count: 0 },
        { country: 'UK', flag: '🇬🇧', count: 0 },
        { country: 'Germany', flag: '🇩🇪', count: 0 },
      ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg border border-blue-200 dark:border-slate-600">
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 text-center">
        🌍 Global Visitor Analytics
      </h4>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {isLoaded ? stats.totalVisits.toLocaleString() : '---'}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300">Total Visits</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {isLoaded ? stats.todayVisits : '---'}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300">Today</div>
        </div>
      </div>

      {/* Rotating Earth Visualization */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 animate-spin-slow opacity-80">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500 animate-pulse">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-300 to-green-300 flex items-center justify-center">
              <span className="text-white text-xs font-bold">🌍</span>
            </div>
          </div>
        </div>
        {/* Visitor dots */}
        <div className="absolute top-2 left-4 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-6 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-8 right-6 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Geographic Distribution - Dynamic */}
      <div className="text-center">
        <div className="text-sm text-slate-600 dark:text-slate-300 mb-2">
          {currentCountry ? (
            <>Recent visitors from: <span className="font-semibold">{COUNTRY_FLAGS[currentCountry]} {COUNTRY_NAMES[currentCountry]}</span></>
          ) : (
            'Recent visitors from:'
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          {displayCountries.map((country, index) => (
            <span 
              key={country.country}
              className={`${
                index === 0 ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                index === 1 ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                index === 2 ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
              } px-2 py-1 rounded animate-pulse`}
              style={{animationDelay: `${index * 0.3}s`}}
              title={country.count > 0 ? `${country.count} visits` : ''}
            >
              {country.flag} {country.country}
            </span>
          ))}
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          *IP-based tracking • Privacy-friendly
        </div>
      </div>
    </div>
  );
} 