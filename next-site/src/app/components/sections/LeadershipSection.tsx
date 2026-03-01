const roles = [
  {
    title: 'IEEE T-CSVT Associate Editor',
    description: 'Associate Editor for IEEE Transactions on Circuits and Systems for Video Technology, one of the top journals in video processing and multimedia systems.',
    details: [
      { label: 'Impact Factor', value: '8.4' },
      { label: 'CiteScore', value: '13.8' },
      { label: 'Journal Rank', value: 'Top Tier' },
    ],
  },
  {
    title: 'IEEE Senior Member',
    description: 'Senior Member of the Institute of Electrical and Electronics Engineers, recognizing significant contributions to the engineering profession.',
    details: [
      { label: 'Organization', value: 'IEEE' },
      { label: 'Grade', value: 'Senior Member' },
      { label: 'Recognition', value: 'Professional Achievement' },
    ],
  },
  {
    title: 'TGO Elite Tech Leader',
    description: 'Member of TGO (鲲鹏会), the premier technology leadership community connecting 1700+ CTOs, CPOs, and Tech VPs globally.',
    details: [
      { label: 'Community', value: '鲲鹏会' },
      { label: 'Members', value: '1700+ Leaders' },
      { label: 'Selection', value: 'Invitation Only' },
    ],
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-16">
      <h2 className="text-title-1 font-bold text-apple-text-primary mb-2 text-center">
        Leadership & Community
      </h2>
      <p className="text-body text-apple-text-secondary text-center mb-10 max-w-lg mx-auto">
        Academic editorial roles and global technology leadership.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {roles.map((role) => (
          <div
            key={role.title}
            className="card-hover p-6 rounded-apple-lg border bg-apple-bg-tertiary"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <h3 className="text-title-3 text-apple-text-primary mb-2">
              {role.title}
            </h3>
            <p className="text-body text-apple-text-secondary leading-relaxed mb-5">
              {role.description}
            </p>
            <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: 'var(--color-separator)' }}>
              {role.details.map((detail) => (
                <div key={detail.label} className="flex justify-between items-baseline">
                  <span className="text-caption text-apple-text-tertiary">{detail.label}</span>
                  <span className="text-caption font-semibold text-amber-600">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
