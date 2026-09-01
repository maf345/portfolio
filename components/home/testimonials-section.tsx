"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

const ROTATE_MS = 7000;
const SWIPE_THRESHOLD = 48;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((nextIndex: number) => {
    setIndex((nextIndex + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const resumeAuto = useCallback(() => {
    window.setTimeout(() => setPaused(false), ROTATE_MS);
  }, []);

  const handleTouchStart = (clientX: number) => {
    touchStartX.current = clientX;
    setPaused(true);
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStartX.current === null) return;

    const delta = clientX - touchStartX.current;
    touchStartX.current = null;

    if (delta < -SWIPE_THRESHOLD) {
      goTo(index + 1);
    } else if (delta > SWIPE_THRESHOLD) {
      goTo(index - 1);
    }

    resumeAuto();
  };

  const item = testimonials[index];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        label="Recommendations"
        title="What colleagues say"
        description="From supervisors and colleagues at Streams Tech and MILVIK Bangladesh."
      />

      <div
        className="mx-auto mt-8 max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-accent hover:text-accent dark:border-gray-700 dark:bg-surface-dark-muted dark:text-gray-300 dark:hover:border-accent dark:hover:text-accent"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
          </button>

          <figure
            key={item.name}
            className="bento-card flex min-h-[220px] flex-1 touch-pan-y select-none flex-col p-6 animate-fade-up sm:p-8"
            aria-live="polite"
            onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-[15px]">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-gray-100 pt-4 dark:border-gray-800">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.name}</p>
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                {item.role} · {item.company}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-accent hover:text-accent dark:border-gray-700 dark:bg-surface-dark-muted dark:text-gray-300 dark:hover:border-accent dark:hover:text-accent"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={i === index ? "true" : undefined}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === index
                  ? "w-7 bg-accent"
                  : "w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
