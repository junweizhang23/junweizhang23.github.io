export default function PublicationsSection() {
  return (
    <section id="publications" className="mb-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Recent Publications
      </h3>
      <div className="space-y-6">
        {/* PhD Thesis */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-lg border-2 border-amber-200 dark:border-amber-700">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">🎓</span>
            <div>
              <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs px-2 py-1 rounded-full font-semibold mb-2 inline-block">
                Ph.D. Thesis
              </span>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                Data Distribution Equivalence for Data Intensive Interconnection Networks
              </h4>
            </div>
          </div>
          <p className="text-blue-600 dark:text-blue-400 mb-2 font-medium">
            Stony Brook University, 2020
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Advisors: Prof. Thomas Robertazzi & Prof. Esther Arkin. Research on optimizing data distribution and flow management in interconnection networks for high-performance computing systems.
          </p>
          <div className="flex gap-4">
            <a href="https://drive.google.com/file/d/1PYd3ewkq5bREWg8NKd6-KZ-8fHuB9AmI/view?usp=sharing" 
               target="_blank" rel="noopener noreferrer"
               className="citation-link text-blue-600 dark:text-blue-400 text-sm hover:underline">Full Text</a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Area-preserving mesh parameterization for poly-annulus surfaces based on optimal mass transportation
          </h4>
          <p className="text-blue-600 dark:text-blue-400 mb-2">
            Computer Aided Geometric Design, 2016 · Cited by 62
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            K Su, L Cui, K Qian, N Lei, J Zhang, M Zhang, XD Gu - A novel approach to mesh parameterization using optimal mass transportation theory.
          </p>
          <div className="flex gap-4">
            <a href="https://drive.google.com/file/d/1KbYDlDd96Q8urhNlwDun5_yURABOMZFH/view?usp=sharing" 
               target="_blank" rel="noopener noreferrer"
               className="citation-link text-blue-600 dark:text-blue-400 text-sm hover:underline">PDF</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">BibTeX</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">DOI</a>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Volume preserving mesh parameterization based on optimal mass transportation
          </h4>
          <p className="text-blue-600 dark:text-blue-400 mb-2">
            Computer-Aided Design, 2017 · Cited by 46
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            K Su, W Chen, N Lei, J Zhang, K Qian, X Gu - Advanced techniques for volume-preserving mesh parameterization using transportation theory.
          </p>
          <div className="flex gap-4">
            <a href="https://drive.google.com/file/d/1Jmfwtsdgnh8JgM3tEcz6QlUZF30d-T1o/view?usp=sharing" 
               target="_blank" rel="noopener noreferrer"
               className="citation-link text-blue-600 dark:text-blue-400 text-sm hover:underline">PDF</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">BibTeX</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">DOI</a>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Coflow Scheduling in Data Centers: Routing and Bandwidth Allocation
          </h4>
          <p className="text-blue-600 dark:text-blue-400 mb-2">
            IEEE Transactions on Parallel and Distributed Systems, 2021 · Cited by 22
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            TG Shi, Li and Liu, Yang and Zhang, Junwei and Robertazzi - Optimization techniques for data center network performance and resource allocation.
          </p>
          <div className="flex gap-4">
            <a href="https://drive.google.com/file/d/1X4zaNWwazyJcqGZWfixwguQL65zqEocO/view?usp=sharing" 
               target="_blank" rel="noopener noreferrer"
               className="citation-link text-blue-600 dark:text-blue-400 text-sm hover:underline">PDF</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">BibTeX</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">DOI</a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Optimizing Data Intensive Flows for Networks on Chips
          </h4>
          <p className="text-blue-600 dark:text-blue-400 mb-2">
            IEEE Transactions on Parallel and Distributed Systems · Cited by 18
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            J Zhang, TG Robertazzi - Novel optimization strategies for data-intensive applications in network-on-chip architectures.
          </p>
          <div className="flex gap-4">
            <a href="https://drive.google.com/file/d/1yWAIN4wE2kHz-ySDo5eQWNnrp0WP5doc/view?usp=sharing" 
               target="_blank" rel="noopener noreferrer"
               className="citation-link text-blue-600 dark:text-blue-400 text-sm hover:underline">PDF</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">BibTeX</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">DOI</a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Space Filling Curves for 3D Sensor Networks with Complex Topology
          </h4>
          <p className="text-blue-600 dark:text-blue-400 mb-2">
            IEEE Transactions on Mobile Computing · Cited by 15
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            J Zhang, J Gao, X Gu - Innovative approaches to sensor network organization using space-filling curves for complex 3D environments.
          </p>
          <div className="flex gap-4">
            <a href="https://drive.google.com/file/d/1D7djp_KGzbcfZAM7SpZhiOyFsfNvUzV0/view?usp=sharing" 
               target="_blank" rel="noopener noreferrer"
               className="citation-link text-blue-600 dark:text-blue-400 text-sm hover:underline">PDF</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">BibTeX</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">DOI</a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            An optimal transportation based univariate neuroimaging index
          </h4>
          <p className="text-blue-600 dark:text-blue-400 mb-2">
            Medical Image Analysis · Cited by 28
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            J Zhang, Y Wang, XD Gu - Novel biomarker development using optimal transport theory for neuroimaging applications.
          </p>
          <div className="flex gap-4">
            <a href="https://drive.google.com/file/d/1Wl7N7U1TN3M_xP7sP0SgI7l2SLi6DrAB/view?usp=sharing" 
               target="_blank" rel="noopener noreferrer"
               className="citation-link text-blue-600 dark:text-blue-400 text-sm hover:underline">PDF</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">BibTeX</a>
            <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">DOI</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <a 
          href="https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ai ai-google-scholar text-lg"></i>
          View All Publications on Google Scholar →
        </a>
      </div>
    </section>
  );
}