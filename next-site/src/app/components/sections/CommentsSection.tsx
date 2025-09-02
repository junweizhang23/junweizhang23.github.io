export default function CommentsSection() {
  return (
    <section className="mt-16">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Academic Discussions
      </h3>
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <p className="text-slate-600 dark:text-slate-300 mb-6 text-center">
          Join the conversation about research, collaborations, and academic topics.
        </p>
        {/* Giscus Comments - Replace with your repository details */}
        <div 
          className="giscus"
          data-repo="junweizhang23/junweizhang23.github.io"
          data-repo-id="[REPO_ID]"
          data-category="General"
          data-category-id="[CATEGORY_ID]"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="preferred_color_scheme"
          data-lang="en"
          data-loading="lazy"
        >
          <p className="text-slate-500 dark:text-slate-400 text-center">
            Comments loading... Please enable JavaScript to participate in discussions.
          </p>
        </div>
      </div>
    </section>
  );
}