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
      <main className="max-w-6xl mx-auto px-6 py-12">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Research Area 1
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Description of your primary research interest and contributions.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Research Area 2
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Description of your secondary research interest and contributions.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Research Area 3
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Description of your tertiary research interest and contributions.
              </p>
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
                Publication Title 1
              </h4>
              <p className="text-blue-600 dark:text-blue-400 mb-2">
                Conference/Journal Name, Year
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Brief description of the publication and its key contributions to the field.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Publication Title 2
              </h4>
              <p className="text-blue-600 dark:text-blue-400 mb-2">
                Conference/Journal Name, Year
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Brief description of the publication and its key contributions to the field.
              </p>
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
        <section id="contact" className="text-center">
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
      </main>

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
