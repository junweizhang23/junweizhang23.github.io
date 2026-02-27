import Link from 'next/link';

export const metadata = {
  title: 'Speaking - Dr. Junwei Zhang',
  description: 'Speaking topics, past talks, and booking information for Dr. Junwei Zhang.',
};

export default function SpeakingPage() {
  const topics = [
    {
      title: 'The Future of Smart Glass AI',
      description: 'How multi-modal AI systems are transforming wearable computing, from real-time perception to on-device inference.',
      audience: 'Industry conferences, tech companies, investor events',
    },
    {
      title: 'From PhD to Production: Bridging Academia and Industry',
      description: 'Lessons learned from transitioning between academic research and building production AI systems at Meta, Uber, and DoorDash.',
      audience: 'Universities, PhD students, career panels',
    },
    {
      title: 'Computational Geometry Meets Modern AI',
      description: 'How classical mathematical foundations in geometry and optimal transport are finding new applications in deep learning and computer vision.',
      audience: 'Academic conferences, research labs, technical workshops',
    },
    {
      title: 'Engineering Leadership in AI Teams',
      description: 'Building and scaling high-performance AI engineering teams. Navigating the tension between research ambition and product delivery.',
      audience: 'Engineering leadership summits, tech management events',
    },
  ];

  const pastTalks = [
    {
      title: 'Smart Glass GenAI Systems at Meta',
      event: 'TGO Tech Leadership Summit',
      year: '2024',
      type: 'Keynote',
    },
    {
      title: 'Multi-Modal AI for Wearable Devices',
      event: 'IEEE Conference',
      year: '2024',
      type: 'Technical Talk',
    },
    {
      title: 'Career in AI: From Academia to Big Tech',
      event: 'YouTube / Bilibili Series',
      year: '2024',
      type: 'Educational Content',
      url: 'https://www.youtube.com/@junweizhang',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-apple-border">
        <div className="max-w-content mx-auto px-6 h-12 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-apple-text-primary hover:text-apple-blue transition-colors">
            Junwei Zhang
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-xs text-apple-text-secondary hover:text-apple-text-primary transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-xs text-apple-text-secondary hover:text-apple-text-primary transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-[680px] mx-auto px-6 py-16">
        <h1 className="text-display font-bold text-apple-text-primary tracking-tight mb-3">
          Speaking
        </h1>
        <p className="text-body text-apple-text-secondary mb-12">
          I speak about smart glass technology, AI systems engineering, and the intersection of academia and industry. 
          Available for keynotes, panels, workshops, and guest lectures.
        </p>

        {/* Topics */}
        <section className="mb-16">
          <h2 className="text-title2 font-semibold text-apple-text-primary mb-6">Topics</h2>
          <div className="space-y-4">
            {topics.map((topic) => (
              <div key={topic.title} className="bg-apple-bg-secondary rounded-apple-lg p-6">
                <h3 className="text-title3 font-semibold text-apple-text-primary mb-2">
                  {topic.title}
                </h3>
                <p className="text-body text-apple-text-secondary leading-relaxed mb-3">
                  {topic.description}
                </p>
                <p className="text-caption text-apple-text-tertiary">
                  Best for: {topic.audience}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Past Talks */}
        <section className="mb-16">
          <h2 className="text-title2 font-semibold text-apple-text-primary mb-6">Selected Talks</h2>
          <div className="space-y-0 divide-y divide-apple-border">
            {pastTalks.map((talk) => (
              <div key={talk.title} className="py-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-body font-medium text-apple-text-primary">
                    {talk.url ? (
                      <a href={talk.url} target="_blank" rel="noopener noreferrer" className="hover:text-apple-blue transition-colors">
                        {talk.title} ↗
                      </a>
                    ) : (
                      talk.title
                    )}
                  </h3>
                  <p className="text-caption text-apple-text-secondary mt-0.5">
                    {talk.event}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-caption text-apple-text-tertiary bg-apple-bg-secondary px-2 py-0.5 rounded-full">
                    {talk.type}
                  </span>
                  <span className="text-caption text-apple-text-tertiary">{talk.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking CTA */}
        <section className="bg-apple-bg-secondary rounded-apple-lg p-8 text-center">
          <h2 className="text-title2 font-semibold text-apple-text-primary mb-3">
            Invite Me to Speak
          </h2>
          <p className="text-body text-apple-text-secondary mb-6 max-w-md mx-auto">
            I am available for keynotes, panel discussions, workshops, and guest lectures. 
            Please include the event details, audience size, and date in your inquiry.
          </p>
          <a
            href="mailto:junweizhang23@gmail.com?subject=Speaking%20Inquiry"
            className="inline-block bg-apple-text-primary text-white text-caption font-medium px-8 py-3 rounded-full hover:opacity-80 transition-opacity"
          >
            Get in Touch
          </a>
          <p className="text-footnote text-apple-text-tertiary mt-4">
            Typical response time: 2-3 business days
          </p>
        </section>
      </main>

      <footer className="border-t border-apple-border py-8 mt-16">
        <div className="max-w-content mx-auto px-6 text-center text-footnote text-apple-text-tertiary">
          <Link href="/" className="hover:text-apple-text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
