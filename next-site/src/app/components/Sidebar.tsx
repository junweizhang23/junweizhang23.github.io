import VisitorAnalytics from './VisitorAnalytics';

export default function Sidebar() {
  return (
    <aside className="lg:col-span-1 space-y-8">
      {/* Visitor Analytics */}
      <VisitorAnalytics />

      {/* Academic Leadership */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          🏆 Academic Leadership
        </h4>
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">IEEE T-CSVT Associate Editor</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">Impact Factor: 8.4 | CiteScore: 13.8</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm font-semibold text-blue-800 dark:text-blue-200">TGO Elite Tech Leader</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">鲲鹏会 - 1700+ CTOs & Tech VPs</div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
            <div className="text-sm font-semibold text-red-800 dark:text-red-200">Stanford CS Master</div>
            <div className="text-xs text-red-600 dark:text-red-300">MSCS Program • In Progress</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <i className="ai ai-google-scholar text-blue-600 dark:text-blue-400"></i>
          📊 Academic & Industry Impact
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-300">Publications</span>
            <span className="font-semibold text-slate-900 dark:text-white">10+</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-300">Citations</span>
            <span className="font-semibold text-slate-900 dark:text-white">152</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-300">h-index</span>
            <span className="font-semibold text-slate-900 dark:text-white">6</span>
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
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
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