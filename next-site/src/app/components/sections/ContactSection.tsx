export default function ContactSection() {
  return (
    <section id="contact" className="text-center mb-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        Connect & Collaborate
      </h3>
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto">
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Currently working at Meta on smart glass GenAI multi-modal systems. As an IEEE Senior Member, 
          IEEE T-CSVT Associate Editor, TGO tech leader, and Stanford CS master program participant, I welcome 
          opportunities for academic collaboration, industry partnerships, editorial discussions, and knowledge 
          sharing on cutting-edge AI and AR technology topics.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">📧 Professional</h4>
            <div className="space-y-2">
              <a 
                href="mailto:junwei.zhang@stonybrook.edu" 
                className="block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/junweizhangcs/" 
                className="block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">🎓 Academic</h4>
            <div className="space-y-2">
              <a 
                href="https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en" 
                className="flex items-center justify-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ai ai-google-scholar"></i>
                Google Scholar
              </a>
              <a 
                href="https://orcid.org/0000-0000-0000-0000" 
                className="flex items-center justify-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ai ai-orcid"></i>
                ORCID
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">🐦 Social</h4>
            <div className="space-y-2">
              <a 
                href="https://x.com/JDI_LINK" 
                className="block text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter/X
              </a>
              <a 
                href="https://github.com/junweizhang23" 
                className="block text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">📺 Content</h4>
            <div className="space-y-2">
              <a 
                href="https://www.youtube.com/@junweizhang" 
                className="block text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              <a 
                href="https://www.bilibili.com/video/BV1QfoGYgERZ/" 
                className="block text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bilibili
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Open to:</strong> Smart glass GenAI collaborations • Editorial opportunities • Tech leadership discussions • 
            Meta Reality Labs partnerships • Multi-modal AI research • Academic speaking engagements • AR/VR innovation projects
          </p>
        </div>
      </div>
    </section>
  );
}