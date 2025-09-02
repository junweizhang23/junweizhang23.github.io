export default function UpdatesSection() {
  const updates = [
    {
      date: "2025-01-02",
      type: "paper",
      title: "New Publication in IEEE T-CSVT",
      description: "Our latest research on smart glass multi-modal systems has been accepted for publication.",
      icon: "📄",
      link: "#publications"
    },
    {
      date: "2024-12-28",
      type: "youtube",
      title: "New YouTube Video: GenAI Smart Glass Systems",
      description: "Deep dive into the technical architecture of next-generation smart glass interfaces.",
      icon: "🎥",
      link: "https://www.youtube.com/@junweizhang"
    },
    {
      date: "2024-12-20",
      type: "twitter",
      title: "IEEE Senior Member Achievement",
      description: "Honored to be recognized as IEEE Senior Member for contributions to the engineering field.",
      icon: "🎖️",
      link: "https://twitter.com/junweizhang"
    },
    {
      date: "2024-12-15",
      type: "bilibili",
      title: "Bilibili中文讲解：多模态AI系统",
      description: "在B站分享了最新的多模态AI系统研究成果和技术解析。",
      icon: "📺",
      link: "https://www.bilibili.com/video/BV1QfoGYgERZ/"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "paper": return "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200";
      case "youtube": return "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200";
      case "twitter": return "bg-sky-100 dark:bg-sky-900/20 text-sky-800 dark:text-sky-200";
      case "bilibili": return "bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-200";
      default: return "bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-200";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "paper": return "Publication";
      case "youtube": return "YouTube";
      case "twitter": return "Twitter/X";
      case "bilibili": return "Bilibili";
      default: return "Update";
    }
  };

  return (
    <section id="updates" className="mb-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Recent Updates & Activities
      </h3>
      
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{update.icon}</div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(update.type)}`}>
                    {getTypeLabel(update.type)}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {new Date(update.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {update.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  {update.description}
                </p>
                
                <a 
                  href={update.link}
                  target={update.link.startsWith('http') ? '_blank' : undefined}
                  rel={update.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                >
                  View Details →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <div className="flex justify-center items-center gap-4 text-slate-600 dark:text-slate-300">
          <span>Follow for more updates:</span>
          <div className="flex gap-3">
            <a 
              href="https://twitter.com/junweizhang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 text-sm font-medium"
            >
              <span className="text-lg">🐦</span> Twitter/X
            </a>
            <a 
              href="https://www.youtube.com/@junweizhang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium"
            >
              <span className="text-lg">📺</span> YouTube
            </a>
            <a 
              href="https://www.bilibili.com/video/BV1QfoGYgERZ/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 text-sm font-medium"
            >
              <span className="text-lg">📺</span> Bilibili
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}