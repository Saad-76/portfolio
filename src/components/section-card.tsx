import { type ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

export function SectionCard({ children, className }: SectionCardProps) {
  return (
    <section
      className={`glass card-hover rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 bg-white${className ? ` ${className}` : ""}`}
    >
      {children}
    </section>
  );
}

