export default function PublicationsSection() {
  return (
    <section id="publications" className="mb-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Recent Publications
      </h3>
      <div className="space-y-6">
        <div className="bg-stone-50/80 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-stone-200/50 dark:border-slate-700">
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
        <div className="bg-stone-50/80 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-stone-200/50 dark:border-slate-700">
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
        <div className="bg-stone-50/80 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-stone-200/50 dark:border-slate-700">
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