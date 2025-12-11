"use client";

import { useEffect, useState } from "react";
import { type Recommendation } from "@/data/portfolio";

type TestimonialsSectionProps = {
  recommendations: Recommendation[];
};

export function TestimonialsSection({ recommendations }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (recommendations.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, [recommendations.length]);

  if (recommendations.length === 0) {
    return null;
  }

  // Show 3 cards at a time
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % recommendations.length;
      cards.push(recommendations[index]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-gray-900">
            What People Say
          </h2>
              <p className="text-lg text-gray-700">
            Trusted by colleagues and clients
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleCards.map((rec, idx) => (
              <div
                key={`${rec.name}-${currentIndex}-${idx}`}
                className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-lg hover:border-blue-500 transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-blue-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <svg
                    className="w-8 h-8 text-gray-300 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                    &ldquo;{rec.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {rec.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {rec.name}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {rec.role} {rec.company && `· ${rec.company}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {recommendations.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-blue-500"
                    : "w-1.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
