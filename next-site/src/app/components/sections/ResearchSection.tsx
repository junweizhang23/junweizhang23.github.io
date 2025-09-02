export default function ResearchSection() {
  return (
    <section id="research" className="mb-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Research Areas
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="research-card bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 ring-4 ring-gradient-to-r ring-yellow-400/30">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">🥽</span>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              Smart Glass Multi-Modal Systems
            </h4>
            <span className="ml-auto bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
              🔥 CUTTING-EDGE
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            <strong>Current Research at Meta:</strong> Developing cutting-edge smart glass GenAI multi-modal systems 
            and infrastructure. Pioneering the integration of computer vision, natural language processing, and immersive 
            AR interfaces that enable seamless human-computer interaction through advanced AI-powered smart glass technology.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">AR/VR</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Multi-Modal AI</span>
            <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded text-xs">Industry R&D</span>
            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">Innovation Lead</span>
          </div>
        </div>
        <div className="research-card bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">📐</span>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              Computational Geometry
            </h4>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            Research in computational geometry, mesh parameterization for poly-annulus surfaces, and optimal mass transportation techniques.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Mesh Parameterization</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Optimal Transport</span>
          </div>
        </div>
        <div className="research-card bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">⚡</span>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              Parallel Computing
            </h4>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            High-performance computing solutions for data centers, network optimization, and parallel processing architectures at scale.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Data Centers</span>
            <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Network Optimization</span>
          </div>
        </div>
        <div className="research-card bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">👁️</span>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              3D Computer Vision
            </h4>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            Advanced computer vision for neuroimaging analysis, biomarker development, and spatial understanding in smart glass applications.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">Neuroimaging</span>
            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-xs">Spatial Computing</span>
          </div>
        </div>
      </div>
    </section>
  );
}