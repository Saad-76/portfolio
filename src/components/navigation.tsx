"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200 backdrop-blur-xl bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 gap-2 sm:gap-4">
        <Link
          href="/"
          className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 transition-opacity hover:opacity-80 whitespace-nowrap flex-shrink-0"
        >
          Saad Mehmood
        </Link>

        <div className="hidden sm:flex gap-1.5 sm:gap-2 md:gap-2.5 items-center overflow-x-auto scrollbar-hide flex-1 justify-end">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-blue-100 text-blue-700 border border-blue-300 shadow-md"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="sm:hidden rounded-full border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:border-blue-500 hover:bg-gray-50"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="sm:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-3 py-3 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

