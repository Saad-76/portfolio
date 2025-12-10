import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { type Blog } from "@/data/portfolio";

type FeaturedBlogsProps = {
  blogs: Blog[];
};

export function FeaturedBlogs({ blogs }: FeaturedBlogsProps) {
  const featured = blogs.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <SectionCard>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-indigo-300">Writing</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent break-words">Latest Articles</h2>
        </div>
        <Link
          href="/blogs"
          className="card-hover rounded-full border border-indigo-400/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/10 whitespace-nowrap flex-shrink-0"
        >
          View All →
        </Link>
      </div>
      <div className="mt-5 sm:mt-6 md:mt-8 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((blog) => (
          <a
            key={blog.title}
            href={blog.link}
            target="_blank"
            rel="noreferrer"
            className="glass card-hover group flex h-full flex-col rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all border-indigo-500/20 hover:border-indigo-500/40"
          >
            <div className="flex items-center gap-2 mb-3">
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
            <h3 className="text-base sm:text-lg font-semibold text-slate-50 group-hover:text-indigo-300 transition-colors mb-2 line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-grow mb-3 line-clamp-3">
              {blog.description}
            </p>
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                {blog.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs text-slate-200 bg-slate-800/50">
                    {tag}
                  </span>
                ))}
                {blog.tags.length > 3 && (
                  <span className="tag rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs text-slate-400">
                    +{blog.tags.length - 3}
                  </span>
                )}
              </div>
            )}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-indigo-300 group-hover:text-indigo-200 transition-colors pt-2 border-t border-indigo-500/20">
              <span>Read more</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1"
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
    </SectionCard>
  );
}

