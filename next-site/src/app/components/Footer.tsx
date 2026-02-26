'use client';

export default function Footer() {
  return (
    <footer className="border-t mt-8" style={{ borderColor: 'var(--color-separator)' }}>
      <div className="max-w-content mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-caption font-semibold text-apple-text-primary mb-3">
              Dr. Junwei Zhang
            </h4>
            <p className="text-caption text-apple-text-tertiary leading-relaxed">
              Meta · Smart Glass GenAI Multi-Modal Systems<br />
              IEEE T-CSVT Associate Editor<br />
              TGO Elite Tech Leader
            </p>
          </div>
          <div>
            <h4 className="text-caption font-semibold text-apple-text-primary mb-3">
              Research
            </h4>
            <p className="text-caption text-apple-text-tertiary leading-relaxed">
              Smart Glass Multi-Modal Systems<br />
              Computer Vision & AR/VR<br />
              Computational Geometry<br />
              Parallel Computing & AI
            </p>
          </div>
          <div>
            <h4 className="text-caption font-semibold text-apple-text-primary mb-3">
              Links
            </h4>
            <div className="flex flex-col gap-1.5">
              <a href="https://scholar.google.com/citations?user=FkAGB3MAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-caption text-apple-accent hover:underline">
                Google Scholar
              </a>
              <a href="https://www.linkedin.com/in/junweizhangcs/" target="_blank" rel="noopener noreferrer" className="text-caption text-apple-accent hover:underline">
                LinkedIn
              </a>
              <a href="https://www.youtube.com/@junweizhang" target="_blank" rel="noopener noreferrer" className="text-caption text-apple-accent hover:underline">
                YouTube
              </a>
              <a href="https://www.bilibili.com/video/BV1QfoGYgERZ/" target="_blank" rel="noopener noreferrer" className="text-caption text-apple-accent hover:underline">
                Bilibili
              </a>
            </div>
          </div>
        </div>
        <div className="border-t pt-6" style={{ borderColor: 'var(--color-separator)' }}>
          <p className="text-footnote text-apple-text-placeholder text-center">
            &copy; {new Date().getFullYear()} Dr. Junwei Zhang
          </p>
        </div>
      </div>
    </footer>
  );
}
