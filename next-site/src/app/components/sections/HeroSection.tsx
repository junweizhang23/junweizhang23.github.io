export default function HeroSection() {
  return (
    <section id="about" className="mb-16">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Dr. Junwei Zhang
          </h2>
          
          {/* Prestigious Roles */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              🏆 IEEE T-CSVT Associate Editor
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              🚀 TGO Elite Tech Leader
            </span>
            <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              🎓 Stanford CS Master
            </span>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            Currently working at <strong>Meta</strong> on cutting-edge <strong>smart glass GenAI multi-modal systems</strong> 
            and infrastructure. As an <strong>Associate Editor for IEEE T-CSVT</strong> (Impact Factor: 8.4) and member 
            of the elite <strong>TGO (鲲鹏会)</strong> tech leadership community, I&apos;m pioneering the next generation 
            of human-computer interaction through advanced AI-powered smart glass technology.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            With a Ph.D. from Stony Brook University and active enrollment in 
            <a href="https://cs.stanford.edu/degrees/mscs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Stanford&apos;s CS Master Program</a>, 
            I bring extensive industry experience from <strong>Meta</strong>, <strong>DoorDash</strong> (Tech Lead), 
            <strong>Microsoft Azure</strong>, and <strong>Uber</strong> (Palo Alto & Seattle). My work spans 3D computer vision, 
            neuroimaging analysis, and network optimization—now applied to revolutionary GenAI multi-modal glass models 
            that redefine immersive experiences. I share insights through my 
            <a href="https://www.youtube.com/@junweizhang" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">YouTube channel</a> 
            and <a href="https://www.bilibili.com/video/BV1QfoGYgERZ/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Bilibili</a>.
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
  );
}