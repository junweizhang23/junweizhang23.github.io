import Link from 'next/link';

export const metadata = {
  title: 'Media Kit - Dr. Junwei Zhang',
  description: 'Press resources, bios, and headshots for Dr. Junwei Zhang.',
};

export default function MediaKitPage() {
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
          Media Kit
        </h1>
        <p className="text-body text-apple-text-secondary mb-12">
          Resources for press, event organizers, and collaborators.
        </p>

        {/* Short Bio */}
        <section className="mb-12">
          <h2 className="text-title2 font-semibold text-apple-text-primary mb-4">Short Bio</h2>
          <div className="bg-apple-bg-secondary rounded-apple-lg p-6">
            <p className="text-body text-apple-text-primary leading-relaxed">
              Dr. Junwei Zhang is a Smart Glass GenAI Multi-Modal Systems Engineer at Meta and an IEEE 
              T-CSVT Associate Editor. He holds a Ph.D. from Stony Brook University and has published 
              research in computational geometry, parallel systems, and AI with 155+ citations. He is an 
              IEEE Senior Member and a TGO Elite Tech Leader.
            </p>
          </div>
          <p className="text-caption text-apple-text-tertiary mt-2">Copy-ready. 50 words.</p>
        </section>

        {/* Extended Bio */}
        <section className="mb-12">
          <h2 className="text-title2 font-semibold text-apple-text-primary mb-4">Extended Bio</h2>
          <div className="bg-apple-bg-secondary rounded-apple-lg p-6">
            <p className="text-body text-apple-text-primary leading-relaxed mb-4">
              Dr. Junwei Zhang is a Smart Glass GenAI Multi-Modal Systems Engineer at Meta, where he works 
              on the next generation of intelligent wearable devices. His work sits at the intersection of 
              computer vision, multi-modal AI, and real-time systems engineering.
            </p>
            <p className="text-body text-apple-text-primary leading-relaxed mb-4">
              Prior to Meta, Dr. Zhang held engineering roles at DoorDash, Microsoft Azure, and Uber, 
              building large-scale distributed systems and AI infrastructure. He earned his Ph.D. from 
              Stony Brook University, where his research focused on computational geometry and optimal 
              mass transportation.
            </p>
            <p className="text-body text-apple-text-primary leading-relaxed">
              Dr. Zhang serves as an Associate Editor for IEEE Transactions on Circuits and Systems for 
              Video Technology (T-CSVT), is an IEEE Senior Member, and is recognized as a TGO Elite Tech 
              Leader. His published work spans computational geometry, parallel computing, and 3D computer 
              vision, with over 155 citations. He creates educational content on YouTube and Bilibili, 
              sharing insights on AI systems and engineering leadership.
            </p>
          </div>
          <p className="text-caption text-apple-text-tertiary mt-2">Copy-ready. 160 words.</p>
        </section>

        {/* Key Facts */}
        <section className="mb-12">
          <h2 className="text-title2 font-semibold text-apple-text-primary mb-4">Key Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Current Role', value: 'Smart Glass GenAI Engineer, Meta' },
              { label: 'Academic Role', value: 'Associate Editor, IEEE T-CSVT' },
              { label: 'Education', value: 'Ph.D., Stony Brook University' },
              { label: 'Membership', value: 'IEEE Senior Member' },
              { label: 'Citations', value: '155+' },
              { label: 'Publications', value: '10+' },
              { label: 'h-index', value: '6' },
              { label: 'Community', value: 'TGO Elite Tech Leader' },
            ].map((fact) => (
              <div key={fact.label} className="bg-apple-bg-secondary rounded-apple p-4">
                <p className="text-caption text-apple-text-tertiary uppercase tracking-wider">{fact.label}</p>
                <p className="text-body font-medium text-apple-text-primary mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Headshots */}
        <section className="mb-12">
          <h2 className="text-title2 font-semibold text-apple-text-primary mb-4">Headshots</h2>
          <div className="bg-apple-bg-secondary rounded-apple-lg p-6 text-center">
            <p className="text-body text-apple-text-secondary">
              High-resolution headshots available upon request.
            </p>
            <a
              href="mailto:junweizhang23@gmail.com?subject=Media%20Kit%20-%20Headshot%20Request"
              className="inline-block mt-4 text-caption text-apple-blue hover:underline"
            >
              Request headshots via email →
            </a>
          </div>
        </section>

        {/* Links */}
        <section className="mb-12">
          <h2 className="text-title2 font-semibold text-apple-text-primary mb-4">Official Links</h2>
          <div className="space-y-3">
            {[
              { label: 'Website', url: 'https://junweizhang23.github.io' },
              { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en' },
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/junweizhangcs/' },
              { label: 'Twitter / X', url: 'https://twitter.com/junweizhang' },
              { label: 'YouTube', url: 'https://www.youtube.com/@junweizhang' },
              { label: 'GitHub', url: 'https://github.com/junweizhang23' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-apple bg-apple-bg-secondary hover:bg-apple-bg-grouped transition-colors"
              >
                <span className="text-body text-apple-text-primary">{link.label}</span>
                <span className="text-caption text-apple-text-tertiary">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact for Media */}
        <section className="bg-apple-bg-secondary rounded-apple-lg p-6 text-center">
          <h2 className="text-title3 font-semibold text-apple-text-primary mb-2">Media Inquiries</h2>
          <p className="text-body text-apple-text-secondary mb-4">
            For interviews, features, or collaboration requests:
          </p>
          <a
            href="mailto:junweizhang23@gmail.com?subject=Media%20Inquiry"
            className="inline-block bg-apple-text-primary text-white text-caption font-medium px-6 py-2.5 rounded-full hover:opacity-80 transition-opacity"
          >
            Contact for Media
          </a>
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
