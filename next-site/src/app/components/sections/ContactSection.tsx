const contactGroups = [
  {
    category: 'Professional',
    links: [
      { label: 'Email', href: 'mailto:junwei.zhang@stonybrook.edu' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/junweizhangcs/', external: true },
    ],
  },
  {
    category: 'Academic',
    links: [
      { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en', external: true },
    ],
  },
  {
    category: 'Social',
    links: [
      { label: 'Twitter / X', href: 'https://x.com/JDI_LINK', external: true },
      { label: 'GitHub', href: 'https://github.com/junweizhang23', external: true },
    ],
  },
  {
    category: 'Content',
    links: [
      { label: 'YouTube', href: 'https://www.youtube.com/@junweizhang', external: true },
      { label: 'Bilibili', href: 'https://www.bilibili.com/video/BV1QfoGYgERZ/', external: true },
    ],
  },
];

const openTo = [
  'Smart glass GenAI collaborations',
  'Editorial opportunities',
  'Tech leadership discussions',
  'Multi-modal AI research',
  'Academic speaking engagements',
  'AR/VR innovation projects',
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-title-1 font-bold text-apple-text-primary mb-2 text-center">
        Connect
      </h2>
      <p className="text-body text-apple-text-secondary text-center mb-10 max-w-xl mx-auto">
        Currently at Meta working on smart glass GenAI systems. Open to academic collaboration, industry partnerships, and editorial discussions.
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {contactGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-caption font-semibold text-apple-text-primary mb-3 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="space-y-2">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="block text-body text-apple-accent hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-apple-lg bg-apple-bg-secondary p-5">
          <p className="text-caption text-apple-text-secondary text-center">
            <span className="font-medium text-apple-text-primary">Open to: </span>
            {openTo.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  );
}
