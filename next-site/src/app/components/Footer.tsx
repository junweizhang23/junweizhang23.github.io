export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Dr. Junwei Zhang</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Meta &bull; Smart Glass GenAI Multi-Modal Systems<br/>
              IEEE T-CSVT Associate Editor<br/>
              TGO Elite Tech Leader
              {/* HIDDEN: Stanford - uncomment when admission is confirmed
              <br/>Stanford CS Master Program
              */}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Research Focus</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Smart Glass Multi-Modal Systems<br/>
              Computer Vision & AR/VR<br/>
              Computational Geometry<br/>
              Parallel Computing & AI
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Connect</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Google Scholar
              </a>
              <a href="https://www.linkedin.com/in/junweizhangcs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                LinkedIn
              </a>
              <a href="https://www.youtube.com/@junweizhang" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline">
                YouTube Channel
              </a>
              <a href="https://www.bilibili.com/video/BV1QfoGYgERZ/" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline">
                Bilibili
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Dr. Junwei Zhang. Meta &bull; IEEE Associate Editor &bull; TGO Tech Leader
          </p>
        </div>
      </div>
    </footer>
  );
}
