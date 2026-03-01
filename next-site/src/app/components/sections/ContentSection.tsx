const channels = [
  {
    title: 'YouTube',
    description: 'Sharing insights on AI, academic research, and industry trends. Deep dives into smart glass technology, multi-modal systems, and the latest innovations.',
    url: 'https://www.youtube.com/@junweizhang',
    cta: 'Subscribe on YouTube',
  },
  {
    title: 'Bilibili',
    description: 'Professional technical content on AI academic research and industry innovations. Exploring smart glass technology, multi-modal AI systems, and emerging tech trends.',
    url: 'https://www.bilibili.com/video/BV1QfoGYgERZ/',
    cta: 'Watch on Bilibili',
  },
];

export default function ContentSection() {
  return (
    <section id="content" className="py-16">
      <h2 className="text-title-1 font-bold text-apple-text-primary mb-2 text-center">
        Knowledge Sharing
      </h2>
      <p className="text-body text-apple-text-secondary text-center mb-10 max-w-lg mx-auto">
        Technical content creation across platforms.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {channels.map((channel) => (
          <div
            key={channel.title}
            className="card-hover p-6 rounded-apple-lg border bg-white"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <h3 className="text-title-3 text-apple-text-primary mb-2">
              {channel.title}
            </h3>
            <p className="text-body text-apple-text-secondary leading-relaxed mb-5">
              {channel.description}
            </p>
            <a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-body font-medium text-apple-accent hover:underline"
            >
              {channel.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
