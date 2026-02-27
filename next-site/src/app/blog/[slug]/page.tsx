import { getPostData, getAllPostSlugs } from '@/lib/blog';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: `${post.title} - Dr. Junwei Zhang`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Dr. Junwei Zhang'],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

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
        {/* Back link */}
        <Link href="/blog" className="text-caption text-apple-blue hover:underline mb-8 inline-block">
          ← All Posts
        </Link>

        {/* Article header */}
        <article>
          <header className="mb-10">
            <time className="text-caption text-apple-text-tertiary uppercase tracking-wider">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1 className="text-display font-bold text-apple-text-primary tracking-tight mt-2">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <div className="flex gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-footnote text-apple-text-tertiary bg-apple-bg-secondary px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article content */}
          <div
            className="prose prose-apple"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />
        </article>

        {/* Article footer */}
        <div className="mt-16 pt-8 border-t border-apple-border">
          <div className="bg-apple-bg-secondary rounded-apple-lg p-6 text-center">
            <p className="text-body text-apple-text-secondary mb-3">
              Enjoyed this post? Subscribe to get notified about new articles.
            </p>
            <p className="text-caption text-apple-text-tertiary">
              Newsletter coming soon. In the meantime, follow me on{' '}
              <a href="https://twitter.com/junweizhang" className="text-apple-blue hover:underline">
                Twitter/X
              </a>{' '}
              or{' '}
              <a href="https://www.linkedin.com/in/junweizhangcs/" className="text-apple-blue hover:underline">
                LinkedIn
              </a>.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-apple-border py-8">
        <div className="max-w-content mx-auto px-6 text-center text-footnote text-apple-text-tertiary">
          <Link href="/" className="hover:text-apple-text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>

      {/* Structured Data for Blog Post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: 'Dr. Junwei Zhang',
              url: 'https://junweizhang23.github.io',
            },
            description: post.excerpt,
            url: `https://junweizhang23.github.io/blog/${slug}`,
          }),
        }}
      />
    </div>
  );
}
