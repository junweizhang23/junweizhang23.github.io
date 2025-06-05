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
                    Academic Researcher & Engineer
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Welcome to my academic profile. I am passionate about advancing knowledge in 
                    computer science and engineering through rigorous research and innovative solutions.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    This website showcases my research contributions, publications, and professional 
                    journey in academia. Please explore my work and feel free to reach out for 
                    collaboration opportunities.
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
                <div className="research-card bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🧠</span>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Machine Learning & AI
                    </h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Developing novel algorithms for pattern recognition, natural language processing, and computer vision applications.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Deep Learning</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">NLP</span>
                  </div>
                </div>
                <div className="research-card bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📊</span>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Data Science & Analytics
                    </h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Extracting insights from complex datasets using statistical methods and visualization techniques.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Statistics</span>
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Visualization</span>
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
                    Advanced Machine Learning Techniques for Pattern Recognition
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    IEEE Transactions on Pattern Analysis, 2024
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    This paper presents novel approaches to pattern recognition using deep learning architectures and demonstrates significant improvements in accuracy.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">PDF</a>
                    <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">BibTeX</a>
                    <a href="#" className="citation-link text-blue-600 dark:text-blue-400 text-sm">DOI</a>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Scalable Data Processing in Distributed Systems
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    ACM Computing Surveys, 2024
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    A comprehensive survey of modern distributed computing techniques for large-scale data processing and analysis.
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
                  href="/publications" 
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  View All Publications →
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
                    href="mailto:your.email@university.edu" 
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Email
                  </a>
                  <a 
                    href="https://scholar.google.com" 
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Scholar
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
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
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                📈 Academic Metrics
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Publications</span>
                  <span className="font-semibold text-slate-900 dark:text-white">25+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Citations</span>
                  <span className="font-semibold text-slate-900 dark:text-white">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">h-index</span>
                  <span className="font-semibold text-slate-900 dark:text-white">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Collaborations</span>
                  <span className="font-semibold text-slate-900 dark:text-white">12</span>
                </div>
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
                    <div className="text-slate-900 dark:text-white">Paper accepted at ICML 2024</div>
                    <div className="text-slate-500 dark:text-slate-400">2 days ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">Keynote at AI Conference</div>
                    <div className="text-slate-500 dark:text-slate-400">1 week ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">New collaboration started</div>
                    <div className="text-slate-500 dark:text-slate-400">2 weeks ago</div>
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
