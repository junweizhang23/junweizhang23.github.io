import VisitorAnalytics from './components/VisitorAnalytics';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header/Navigation */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Junwei Zhang
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#research" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Research
              </a>
              <a href="#publications" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Publications
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <main className="lg:col-span-3">
            {/* Hero Section */}
            <section id="about" className="mb-16">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Dr. Junwei Zhang
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Senior Software Engineer at DoorDash and pioneering researcher in cutting-edge technology. 
                    I&apos;m currently developing next-generation <strong>smart glass multi-modal systems</strong> that 
                    integrate computer vision, parallel computing, and advanced user interfaces for immersive experiences.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    With a Ph.D. from Stony Brook University and expertise spanning computational geometry, 
                    optimal mass transportation, and data center optimization, I bridge theoretical foundations 
                    with practical innovations. My research portfolio includes pioneering work in 3D computer vision, 
                    neuroimaging analysis, and network optimization—now applied to revolutionary smart glass technology 
                    that redefines human-computer interaction.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="#publications" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      View Publications
                    </a>
                    <a 
                      href="#contact" 
                      className="border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-slate-500 dark:text-slate-400 text-sm text-center">
                      Profile Photo
                      <br />
                      (Add your image)
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Research Areas */}
            <section id="research" className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Research Areas
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="research-card bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 ring-2 ring-blue-500/20">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🥽</span>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Smart Glass Multi-Modal Systems
                    </h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    <strong>Current Research:</strong> Developing cutting-edge smart glass technology integrating computer vision, 
                    gesture recognition, and immersive interfaces for next-generation human-computer interaction.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">AR/VR</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Multi-Modal AI</span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded text-xs">Industry R&D</span>
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

            {/* Publications Preview */}
            <section id="publications" className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Recent Publications
              </h3>
              <div className="space-y-6">
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
                    <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">PDF</a>
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
                    <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">PDF</a>
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
                    <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">PDF</a>
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

            {/* Contact */}
            <section id="contact" className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Get in Touch
              </h3>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto">
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  I welcome opportunities for collaboration, discussions about research, 
                  and academic networking.
                </p>
                <div className="flex justify-center gap-6">
                  <a 
                    href="mailto:junwei.zhang@stonybrook.edu" 
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Email
                  </a>
                  <a 
                    href="https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en" 
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ai ai-google-scholar"></i>
                    Google Scholar
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/junweizhangcs/" 
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://orcid.org/0000-0000-0000-0000" 
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ai ai-orcid"></i>
                    ORCID
                  </a>
                </div>
              </div>
            </section>

            {/* Comments Section */}
            <section className="mt-16">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Academic Discussions
              </h3>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-center">
                  Join the conversation about research, collaborations, and academic topics.
                </p>
                {/* Giscus Comments - Replace with your repository details */}
                <div 
                  className="giscus"
                  data-repo="junweizhang23/junweizhang23.github.io"
                  data-repo-id="[REPO_ID]"
                  data-category="General"
                  data-category-id="[CATEGORY_ID]"
                  data-mapping="pathname"
                  data-strict="0"
                  data-reactions-enabled="1"
                  data-emit-metadata="0"
                  data-input-position="top"
                  data-theme="preferred_color_scheme"
                  data-lang="en"
                  data-loading="lazy"
                >
                  <p className="text-slate-500 dark:text-slate-400 text-center">
                    Comments loading... Please enable JavaScript to participate in discussions.
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Visitor Analytics */}
            <VisitorAnalytics />

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
                  <span className="font-semibold text-slate-900 dark:text-white">155</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">h-index</span>
                  <span className="font-semibold text-slate-900 dark:text-white">6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">Industry Experience</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Senior SWE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">Current Focus</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Smart Glass</span>
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
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">Smart glass multi-modal system prototype milestone</div>
                    <div className="text-slate-500 dark:text-slate-400">1 week ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">Advanced AR interface development at DoorDash</div>
                    <div className="text-slate-500 dark:text-slate-400">2 weeks ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">Multi-modal AI research collaboration</div>
                    <div className="text-slate-500 dark:text-slate-400">1 month ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">Computer vision optimization for real-time applications</div>
                    <div className="text-slate-500 dark:text-slate-400">6 weeks ago</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Junwei Zhang. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
