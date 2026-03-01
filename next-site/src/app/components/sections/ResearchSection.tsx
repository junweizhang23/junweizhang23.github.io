const researchAreas = [
  {
    title: 'Smart Glass Multi-Modal Systems',
    description: 'Developing cutting-edge smart glass GenAI multi-modal systems and infrastructure at Meta. Pioneering the integration of computer vision, natural language processing, and immersive AR interfaces.',
    tags: ['AR/VR', 'Multi-Modal AI', 'Industry R&D'],
    highlight: true,
  },
  {
    title: 'Computational Geometry',
    description: 'Research in computational geometry, mesh parameterization for poly-annulus surfaces, and optimal mass transportation techniques.',
    tags: ['Mesh Parameterization', 'Optimal Transport'],
  },
  {
    title: 'Parallel Computing',
    description: 'High-performance computing solutions for data centers, network optimization, and parallel processing architectures at scale.',
    tags: ['Data Centers', 'Network Optimization'],
  },
  {
    title: '3D Computer Vision',
    description: 'Advanced computer vision for neuroimaging analysis, biomarker development, and spatial understanding in smart glass applications.',
    tags: ['Neuroimaging', 'Spatial Computing'],
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-16">
      <h2 className="text-title-1 font-bold text-apple-text-primary mb-2 text-center">
        Research Areas
      </h2>
      <p className="text-body text-apple-text-secondary text-center mb-10 max-w-lg mx-auto">
        Spanning smart glass technology, computational geometry, and AI systems.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {researchAreas.map((area) => (
          <div
            key={area.title}
            className={`card-hover p-6 rounded-apple-lg border bg-white ${
              area.highlight ? 'border-amber-500/30' : ''
            }`}
            style={{ borderColor: area.highlight ? undefined : 'var(--color-border)' }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-title-3 text-apple-text-primary">
                {area.title}
              </h3>
              {area.highlight && (
                <span className="flex-shrink-0 ml-3 text-footnote font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-apple-sm">
                  Current
                </span>
              )}
            </div>
            <p className="text-body text-apple-text-secondary leading-relaxed mb-4">
              {area.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {area.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-footnote text-apple-text-tertiary bg-apple-bg-grouped px-2.5 py-1 rounded-apple-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
