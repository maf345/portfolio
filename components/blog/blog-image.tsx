"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type BlogImageProps = {
  src?: string;
  alt?: string;
};

export function BlogImage({ src, alt = "" }: BlogImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!src) return null;

  return (
    <span className="block">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative mb-6 mt-2 block w-full text-left"
        aria-label={alt ? `Enlarge image: ${alt}` : "Enlarge image"}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full cursor-zoom-in rounded-lg border border-gray-200 transition-shadow hover:shadow-md dark:border-gray-700"
        />
        <span className="pointer-events-none absolute bottom-2 right-2 rounded-md bg-black/65 px-2 py-1 text-xs font-medium text-white opacity-90 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
          Tap to enlarge
        </span>
      </button>

      {open && mounted
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
              onClick={close}
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged image"
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
                aria-label="Close enlarged image"
              >
                ×
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="max-h-[90vh] max-w-full object-contain"
                onClick={(event) => event.stopPropagation()}
              />
            </div>,
            document.body,
          )
        : null}
    </span>
  );
}
