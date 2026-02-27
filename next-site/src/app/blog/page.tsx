import { getSortedPostsData } from '@/lib/blog';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Dr. Junwei Zhang',
  description: 'Thoughts on smart glass technology, AI systems, and the intersection of academia and industry.',
};

export default function BlogPage() {
  const posts = getSortedPostsData();

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
            <Link href="/blog" className="text-xs text-apple-text-primary font-medium">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-[680px] mx-auto px-6 py-16">
        <h1 className="text-display font-bold text-apple-text-primary tracking-tight mb-3">
          Blog
        </h1>
        <p className="text-body text-apple-text-secondary mb-12">
          Thoughts on smart glass technology, AI systems, and the intersection of academia and industry.
        </p>

        {posts.length === 0 ? (
          <p className="text-body text-apple-text-tertiary">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <time className="text-caption text-apple-text-tertiary uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="text-title2 font-semibold text-apple-text-primary mt-1 group-hover:text-apple-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-body text-apple-text-secondary mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-footnote text-apple-text-tertiary bg-apple-bg-secondary px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="inline-block text-caption text-apple-blue mt-3 group-hover:underline">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-apple-border py-8">
        <div className="max-w-content mx-auto px-6 text-center text-footnote text-apple-text-tertiary">
          <Link href="/" className="hover:text-apple-text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
