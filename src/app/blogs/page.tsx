import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { blogs } from "@/data/portfolio";

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="glow -left-10 -top-20 h-72 w-72 bg-indigo-500/50" />
      <div className="glow right-0 top-10 h-64 w-64 bg-purple-500/40" />
      <div className="glow left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 bg-emerald-500/40" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-8 sm:gap-12 px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:px-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-indigo-300">Writing</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">Blog Posts</h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-300">Technical articles, tutorials, and insights on software development</p>
          </div>
          <Link
            href="/"
            className="card-hover rounded-full border border-indigo-400/40 px-4 py-2 text-xs sm:text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/10 whitespace-nowrap self-start sm:self-center"
          >
            ← Back
          </Link>
        </div>

        {blogs.length === 0 ? (
          <SectionCard>
            <div className="text-center py-12">
              <p className="text-slate-400">No blog posts yet. Check back soon!</p>
            </div>
          </SectionCard>
        ) : (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
            {blogs.map((blog) => (
              <a
                key={blog.title}
                href={blog.link}
                target="_blank"
                rel="noreferrer"
                className="glass card-hover group flex h-full flex-col rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all border-indigo-500/20 hover:border-indigo-500/40"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-indigo-300 uppercase tracking-wide">
                        {blog.platform}
                      </span>
                      {blog.date && (
                        <>
                          <span className="text-slate-500">·</span>
                          <span className="text-xs text-slate-400">{blog.date}</span>
                        </>
                      )}
                      {blog.readTime && (
                        <>
                          <span className="text-slate-500">·</span>
                          <span className="text-xs text-slate-400">{blog.readTime}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-50 group-hover:text-indigo-300 transition-colors">
                      {blog.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed flex-grow mb-4">
                  {blog.description}
                </p>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="tag rounded-full px-2.5 py-1 text-xs text-slate-200 bg-slate-800/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 pt-4 border-t border-indigo-500/20 flex items-center gap-2 text-sm text-indigo-300 group-hover:text-indigo-200 transition-colors">
                  <span>Read article</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

