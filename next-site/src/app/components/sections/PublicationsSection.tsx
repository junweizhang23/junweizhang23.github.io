const publications = [
  {
    title: 'Area-preserving mesh parameterization for poly-annulus surfaces based on optimal mass transportation',
    venue: 'Computer Aided Geometric Design',
    year: 2016,
    citations: 59,
    authors: 'K Su, L Cui, K Qian, N Lei, J Zhang, M Zhang, XD Gu',
    pdf: 'https://drive.google.com/file/d/1KbYDlDd96Q8urhNlwDun5_yURABOMZFH/view?usp=sharing',
  },
  {
    title: 'Volume preserving mesh parameterization based on optimal mass transportation',
    venue: 'Computer-Aided Design',
    year: 2017,
    citations: 47,
    authors: 'K Su, W Chen, N Lei, J Zhang, K Qian, X Gu',
    pdf: 'https://drive.google.com/file/d/1Jmfwtsdgnh8JgM3tEcz6QlUZF30d-T1o/view?usp=sharing',
  },
  {
    title: 'Coflow Scheduling in Data Centers: Routing and Bandwidth Allocation',
    venue: 'IEEE Transactions on Parallel and Distributed Systems',
    year: 2021,
    citations: 23,
    authors: 'TG Shi, Li and Liu, Yang and Zhang, Junwei and Robertazzi',
    pdf: 'https://drive.google.com/file/d/1X4zaNWwazyJcqGZWfixwguQL65zqEocO/view?usp=sharing',
  },
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-16">
      <h2 className="text-title-1 font-bold text-apple-text-primary mb-2 text-center">
        Selected Publications
      </h2>
      <p className="text-body text-apple-text-secondary text-center mb-10 max-w-lg mx-auto">
        Peer-reviewed research in computational geometry, parallel systems, and AI.
      </p>

      <div className="space-y-3">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="card-hover p-5 rounded-apple-lg border bg-apple-bg-tertiary"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <h3 className="text-body-lg font-semibold text-apple-text-primary mb-1.5 leading-snug">
              {pub.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-apple-text-secondary mb-2">
              <span>{pub.venue}</span>
              <span className="text-apple-text-placeholder">·</span>
              <span>{pub.year}</span>
              <span className="text-apple-text-placeholder">·</span>
              <span>Cited by {pub.citations}</span>
            </div>
            <p className="text-caption text-apple-text-tertiary mb-3">
              {pub.authors}
            </p>
            <a
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="citation-link text-caption font-medium"
            >
              PDF
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en"
          className="inline-flex items-center gap-2 text-body font-medium text-apple-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ai ai-google-scholar text-lg"></i>
          View All Publications on Google Scholar
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
