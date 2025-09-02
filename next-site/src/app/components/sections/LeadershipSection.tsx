export default function LeadershipSection() {
  return (
    <section id="leadership" className="mb-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Academic Leadership & Global Communities
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🏆</span>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              IEEE T-CSVT Associate Editor
            </h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Associate Editor for IEEE Transactions on Circuits and Systems for Video Technology, 
            one of the top journals in video processing and multimedia systems.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Impact Factor:</span>
              <span className="font-semibold text-yellow-700 dark:text-yellow-300">8.4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">CiteScore:</span>
              <span className="font-semibold text-yellow-700 dark:text-yellow-300">13.8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Journal Rank:</span>
              <span className="font-semibold text-yellow-700 dark:text-yellow-300">Top Tier</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🚀</span>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              TGO Elite Tech Leader
            </h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Member of TGO (鲲鹏会), the premier technology leadership community connecting 
            1700+ CTOs, CPOs, and Tech VPs globally.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Community:</span>
              <span className="font-semibold text-blue-700 dark:text-blue-300">鲲鹏会</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Members:</span>
              <span className="font-semibold text-blue-700 dark:text-blue-300">1700+ Leaders</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Selection:</span>
              <span className="font-semibold text-blue-700 dark:text-blue-300">Invitation Only</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border-2 border-red-200 dark:border-red-700">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🎓</span>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              Stanford CS Master Program
            </h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Currently enrolled in Stanford&apos;s prestigious Computer Science Master Program, 
            advancing expertise in cutting-edge AI and computer systems research.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Institution:</span>
              <span className="font-semibold text-red-700 dark:text-red-300">Stanford University</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Program:</span>
              <span className="font-semibold text-red-700 dark:text-red-300">CS Master (MSCS)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Status:</span>
              <span className="font-semibold text-red-700 dark:text-red-300">In Progress</span>
            </div>
          </div>
          <div className="mt-4">
            <a 
              href="https://cs.stanford.edu/degrees/mscs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium"
            >
              🔗 Program Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}