import { type ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

export function SectionCard({ children, className }: SectionCardProps) {
  return (
    <section
      className={`glass card-hover rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border-indigo-500/20 hover:border-indigo-500/40 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300${className ? ` ${className}` : ""}`}
    >
      {children}
    </section>
  );
}

