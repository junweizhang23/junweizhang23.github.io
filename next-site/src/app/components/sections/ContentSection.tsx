export default function ContentSection() {
  return (
    <section id="content" className="mb-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Knowledge Sharing & Content Creation
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* YouTube Card */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">📺</span>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              YouTube Channel
            </h4>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Sharing insights on AI, academic research, and industry trends. 
            Deep dives into smart glass technology, multi-modal systems, and the latest innovations in tech.
          </p>
          <a 
            href="https://www.youtube.com/@junweizhang" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span>📺</span>
            Subscribe on YouTube
          </a>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🎬</span>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              Bilibili Channel
            </h4>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Creating professional technical content sharing cutting-edge insights on AI academic research and industry innovations. 
            Exploring smart glass technology, multi-modal AI systems, and emerging tech trends in depth.
          </p>
          <a 
            href="https://www.bilibili.com/video/BV1QfoGYgERZ/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span>🎬</span>
            Watch on Bilibili
          </a>
        </div>
      </div>
    </section>
  );
}