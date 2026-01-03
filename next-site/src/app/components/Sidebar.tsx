'use client';

import { useEffect, useState } from 'react';

interface ScholarMetrics {
  citations: number;
  hIndex: number;
  i10Index: number;
  publications: number;
  lastUpdated?: string;
}

export default function Sidebar() {
  const [metrics, setMetrics] = useState<ScholarMetrics>({
    citations: 152,
    hIndex: 6,
    i10Index: 3,
    publications: 10,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load metrics from scholar-metadata.json
    const loadMetrics = async () => {
      try {
        const response = await fetch('/scholar-metadata.json');
        if (response.ok) {
          const data = await response.json();
          setMetrics({
            citations: data.citations || 152,
            hIndex: data.hIndex || 6,
            i10Index: data.i10Index || 3,
            publications: data.publications || 10,
            lastUpdated: data.lastUpdated,
          });
        }
      } catch (error) {
        console.log('Could not load scholar metrics, using defaults:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMetrics();
  }, []);

  return (
    <aside className="lg:col-span-1 space-y-8">
      {/* Quick Stats */}
      <div className="bg-stone-50/80 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-stone-200/50 dark:border-slate-700">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <i className="ai ai-google-scholar text-blue-600 dark:text-blue-400"></i>
          📊 Academic & Industry Impact
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-300">Publications</span>
            <span className="font-semibold text-slate-900 dark:text-white">
              {isLoading ? '---' : `${metrics.publications}+`}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-300">Citations</span>
            <span className="font-semibold text-slate-900 dark:text-white">
              {isLoading ? '---' : metrics.citations.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-300">h-index</span>
            <span className="font-semibold text-slate-900 dark:text-white">
              {isLoading ? '---' : metrics.hIndex}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-300">Editorial Roles</span>
            <span className="font-semibold text-slate-900 dark:text-white">IEEE AE</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-300">Current Role</span>
            <span className="font-semibold text-slate-900 dark:text-white">Meta</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-300">Focus Area</span>
            <span className="font-semibold text-slate-900 dark:text-white">Smart Glass GenAI</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
          <a 
            href="https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            <i className="ai ai-google-scholar"></i>
            View Google Scholar Profile
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-stone-50/80 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-stone-200/50 dark:border-slate-700">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          🔄 Recent Activity
        </h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="text-slate-900 dark:text-white">Smart glass GenAI multi-modal infrastructure at Meta</div>
              <div className="text-slate-500 dark:text-slate-400">Current</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="text-slate-900 dark:text-white">Stanford CS Master program coursework</div>
              <div className="text-slate-500 dark:text-slate-400">In Progress</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="text-slate-900 dark:text-white">IEEE T-CSVT editorial review activities</div>
              <div className="text-slate-500 dark:text-slate-400">Ongoing</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="text-slate-900 dark:text-white">TGO community tech leadership discussions</div>
              <div className="text-slate-500 dark:text-slate-400">Active</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}