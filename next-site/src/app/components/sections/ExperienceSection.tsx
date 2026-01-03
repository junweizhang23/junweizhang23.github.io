'use client';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  color: string;
  icon: string;
  location?: string;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: 'Meta',
      role: 'Smart Glass GenAI Multi-Modal Systems',
      period: '2024 - Present',
      description: 'Working on cutting-edge smart glass technology and infrastructure, developing GenAI multi-modal glass models for next-generation AR experiences.',
      tags: ['Smart Glass', 'GenAI', 'Multi-Modal AI'],
      color: 'blue',
      icon: 'M',
      location: 'Current Position'
    },
    {
      company: 'DoorDash',
      role: 'Tech Lead',
      period: '2022 - 2024',
      description: 'Led technology initiatives and engineering teams, driving innovation in large-scale distributed systems and smart technology applications.',
      tags: ['Tech Leadership', 'Distributed Systems'],
      color: 'orange',
      icon: 'D'
    },
    {
      company: 'Microsoft Azure',
      role: 'Software Engineer',
      period: '2020 - 2022',
      description: 'Contributed to cloud computing infrastructure and Azure services, working on large-scale distributed systems and cloud technologies.',
      tags: ['Cloud Computing', 'Azure'],
      color: 'blue',
      icon: 'M'
    },
    {
      company: 'Uber',
      role: 'Software Engineer',
      period: '2018 - 2020',
      description: 'Worked across multiple offices developing high-performance systems for ride-sharing and logistics platforms at global scale.',
      tags: ['High Performance', 'Logistics'],
      color: 'slate',
      icon: 'U',
      location: 'Palo Alto & Seattle'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; tag: string }> = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-700',
        tag: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-700',
        tag: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
      },
      slate: {
        bg: 'bg-slate-50 dark:bg-slate-800',
        text: 'text-slate-600 dark:text-slate-400',
        border: 'border-slate-200 dark:border-slate-700',
        tag: 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200'
      }
    };
    return colors[color] || colors.slate;
  };

  return (
    <section id="experience" className="mb-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Professional Experience
      </h3>
      
      {/* Timeline Visualization */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400 dark:from-blue-600 dark:via-purple-600 dark:to-orange-600 hidden md:block"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            return (
              <div 
                key={index}
                className="relative flex items-start gap-6 group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 ${colors.bg} ${colors.border} border-2 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <span className={`${colors.text} font-bold text-xl`}>{exp.icon}</span>
                  </div>
                  {/* Animated pulse effect */}
                  <div className={`absolute inset-0 ${colors.bg} rounded-lg animate-ping opacity-20`}></div>
                </div>
                
                {/* Content Card */}
                <div className={`flex-1 ${colors.bg} ${colors.border} border rounded-lg p-6 shadow-sm group-hover:shadow-md transition-shadow`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                        {exp.company}
                      </h4>
                      <p className={`${colors.text} font-medium`}>
                        {exp.role}
                        {exp.location && ` • ${exp.location}`}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`${colors.tag} px-2 py-1 rounded text-xs font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}