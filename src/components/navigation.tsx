"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-indigo-500/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 gap-2 sm:gap-4">
        <Link
          href="/"
          className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-opacity hover:opacity-80 whitespace-nowrap flex-shrink-0"
        >
          Saad Mehmood
        </Link>

        <div className="hidden sm:flex gap-1 sm:gap-1.5 overflow-x-auto scrollbar-hide flex-1 justify-end">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-400/40 shadow-lg shadow-indigo-500/20"
                    : "text-slate-300 hover:text-indigo-300 hover:bg-indigo-500/10"
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
          className="sm:hidden rounded-full border border-indigo-400/40 px-3 py-2 text-xs font-semibold text-indigo-200 hover:border-indigo-400/60 hover:bg-indigo-500/10"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="sm:hidden border-t border-indigo-500/20 bg-[#0a0e27]/95 backdrop-blur-xl">
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
                      ? "bg-indigo-500/20 text-indigo-200 border border-indigo-400/30"
                      : "text-slate-200 hover:text-indigo-200 hover:bg-indigo-500/10"
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

