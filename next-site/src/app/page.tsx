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
              <a href="#leadership" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Leadership
              </a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Experience
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

            {/* Professional Experience */}
            <section id="experience" className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Professional Experience
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Meta</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Current Position</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Smart Glass GenAI Multi-Modal Systems</strong><br/>
                    Working on cutting-edge smart glass technology and infrastructure, developing GenAI multi-modal glass models for next-generation AR experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Smart Glass</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">GenAI</span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded text-xs">Multi-Modal AI</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">DoorDash</h4>
                      <p className="text-orange-600 dark:text-orange-400 font-medium">Tech Lead</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Led technology initiatives and engineering teams, driving innovation in large-scale distributed systems and smart technology applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Tech Leadership</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Distributed Systems</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Microsoft Azure</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Contributed to cloud computing infrastructure and Azure services, working on large-scale distributed systems and cloud technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Cloud Computing</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Azure</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-black dark:bg-slate-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">U</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Uber</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">Software Engineer • Palo Alto & Seattle</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Worked across multiple offices developing high-performance systems for ride-sharing and logistics platforms at global scale.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-2 py-1 rounded text-xs">High Performance</span>
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-xs">Logistics</span>
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

            {/* Academic Leadership & Community */}
            <section id="leadership" className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Academic Leadership & Global Communities
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🏆</span>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                      IEEE T-CSVT Associate Editor
                    </h4>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Associate Editor for IEEE Transactions on Circuits and Systems for Video Technology, 
                    one of the top journals in video processing and multimedia systems.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Impact Factor:</span>
                      <span className="font-semibold text-yellow-700 dark:text-yellow-300">8.4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">CiteScore:</span>
                      <span className="font-semibold text-yellow-700 dark:text-yellow-300">13.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Journal Rank:</span>
                      <span className="font-semibold text-yellow-700 dark:text-yellow-300">Top Tier</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🚀</span>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                      TGO Elite Tech Leader
                    </h4>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Member of TGO (鲲鹏会), the premier technology leadership community connecting 
                    1700+ CTOs, CPOs, and Tech VPs globally.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Community:</span>
                      <span className="font-semibold text-blue-700 dark:text-blue-300">鲲鹏会</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Members:</span>
                      <span className="font-semibold text-blue-700 dark:text-blue-300">1700+ Leaders</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Selection:</span>
                      <span className="font-semibold text-blue-700 dark:text-blue-300">Invitation Only</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border-2 border-red-200 dark:border-red-700">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🎓</span>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Stanford CS Master Program
                    </h4>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Currently enrolled in Stanford&apos;s prestigious Computer Science Master Program, 
                    advancing expertise in cutting-edge AI and computer systems research.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Institution:</span>
                      <span className="font-semibold text-red-700 dark:text-red-300">Stanford University</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Program:</span>
                      <span className="font-semibold text-red-700 dark:text-red-300">CS Master (MSCS)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Status:</span>
                      <span className="font-semibold text-red-700 dark:text-red-300">In Progress</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a 
                      href="https://cs.stanford.edu/degrees/mscs/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium"
                    >
                      🔗 Program Details
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Creation & Knowledge Sharing */}
            <section id="content" className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Knowledge Sharing & Content Creation
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
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
                Connect & Collaborate
              </h3>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto">
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Currently working at Meta on smart glass GenAI multi-modal systems. As an IEEE Associate Editor, 
                  TGO tech leader, and Stanford CS master program participant, I welcome opportunities for academic 
                  collaboration, industry partnerships, editorial discussions, and knowledge sharing on cutting-edge 
                  AI and AR technology topics.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
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

            {/* Academic Leadership */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                🏆 Academic Leadership
              </h4>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">IEEE T-CSVT Associate Editor</div>
                  <div className="text-xs text-yellow-600 dark:text-yellow-300">Impact Factor: 8.4 | CiteScore: 13.8</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="text-sm font-semibold text-blue-800 dark:text-blue-200">TGO Elite Tech Leader</div>
                  <div className="text-xs text-blue-600 dark:text-blue-300">鲲鹏会 - 1700+ CTOs & Tech VPs</div>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="text-sm font-semibold text-red-800 dark:text-red-200">Stanford CS Master</div>
                  <div className="text-xs text-red-600 dark:text-red-300">MSCS Program • In Progress</div>
                </div>
              </div>
            </div>

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
                  <span className="text-slate-600 dark:text-slate-300">Editorial Roles</span>
                  <span className="font-semibold text-slate-900 dark:text-white">IEEE AE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">Current Role</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Meta</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">Focus Area</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Smart Glass GenAI</span>
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
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">Smart glass GenAI multi-modal infrastructure at Meta</div>
                    <div className="text-slate-500 dark:text-slate-400">Current</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">Stanford CS Master program coursework</div>
                    <div className="text-slate-500 dark:text-slate-400">In Progress</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">IEEE T-CSVT editorial review activities</div>
                    <div className="text-slate-500 dark:text-slate-400">Ongoing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-slate-900 dark:text-white">TGO community tech leadership discussions</div>
                    <div className="text-slate-500 dark:text-slate-400">Active</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Dr. Junwei Zhang</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Meta • Smart Glass GenAI Multi-Modal Systems<br/>
                IEEE T-CSVT Associate Editor<br/>
                TGO Elite Tech Leader<br/>
                Stanford CS Master Program
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
              © 2025 Dr. Junwei Zhang. Meta • IEEE Associate Editor • TGO Tech Leader • Stanford CS Master
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
