export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Professional Experience
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Meta</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Current Position</p>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            <strong>Smart Glass GenAI Multi-Modal Systems</strong><br/>
            Working on cutting-edge smart glass technology and infrastructure, developing GenAI multi-modal glass models for next-generation AR experiences.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Smart Glass</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">GenAI</span>
            <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded text-xs">Multi-Modal AI</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white">DoorDash</h4>
              <p className="text-orange-600 dark:text-orange-400 font-medium">Tech Lead</p>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Led technology initiatives and engineering teams, driving innovation in large-scale distributed systems and smart technology applications.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Tech Leadership</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Distributed Systems</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Microsoft Azure</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Software Engineer</p>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Contributed to cloud computing infrastructure and Azure services, working on large-scale distributed systems and cloud technologies.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Cloud Computing</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Azure</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-black dark:bg-slate-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Uber</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Software Engineer • Palo Alto & Seattle</p>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            Worked across multiple offices developing high-performance systems for ride-sharing and logistics platforms at global scale.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-2 py-1 rounded text-xs">High Performance</span>
            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-xs">Logistics</span>
          </div>
        </div>
      </div>
    </section>
  );
}