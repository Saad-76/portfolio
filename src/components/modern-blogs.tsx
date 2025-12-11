import Link from "next/link";
import { type Blog } from "@/data/portfolio";

type BlogsSectionProps = {
  blogs: Blog[];
};

export function BlogsSection({ blogs }: BlogsSectionProps) {
  const featured = blogs.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-6 mb-12">
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-gray-900">
              Latest Articles
            </h2>
                <p className="text-lg text-gray-700">
              Technical insights and tutorials
            </p>
          </div>
          <Link
            href="/blogs"
            className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-blue-500 transition-all backdrop-blur-sm"
          >
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((blog) => (
            <a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="group relative block"
            >
              <div className="h-full p-8 rounded-3xl bg-white border border-gray-200 shadow-lg hover:border-blue-500 transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs text-blue-700 font-medium">
                    {blog.platform}
                  </span>
                  {blog.date && (
                    <span className="text-xs text-gray-500">{blog.date}</span>
                  )}
                  {blog.readTime && (
                    <span className="text-xs text-gray-500">· {blog.readTime}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {blog.description}
                </p>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-lg bg-gray-100 border border-gray-200 text-xs text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-blue-600 group-hover:gap-3 transition-all">
                  <span>Read article</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

