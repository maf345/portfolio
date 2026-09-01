"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

const ROTATE_MS = 7000;
const SWIPE_THRESHOLD = 48;

function initialsFromName(name: string) {
  const words = name.replace(/[().,]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

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
            className="bento-card relative flex min-h-[220px] flex-1 touch-pan-y select-none flex-col overflow-hidden animate-fade-up"
            aria-live="polite"
            onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
          >
            <div
              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent via-accent/60 to-transparent"
              aria-hidden
            />
            <div className="relative flex flex-1 flex-col px-6 py-6 sm:px-8 sm:py-8">
              <span
                className="font-serif text-5xl leading-none text-accent/25 dark:text-accent/35"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-[15px]">
                {item.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-dashed border-gray-200 pt-5 dark:border-gray-700">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs font-bold text-accent dark:border-accent/30 dark:bg-accent/15"
                  aria-hidden
                >
                  {initialsFromName(item.name)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                    <span className="text-accent/80 dark:text-accent-light/90">{item.role}</span>
                    <span className="mx-1.5 text-gray-300 dark:text-gray-600">·</span>
                    {item.company}
                  </p>
                </div>
              </figcaption>
            </div>
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
