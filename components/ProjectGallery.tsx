"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Screenshot } from "@/content/types";

export default function ProjectGallery({
  screenshots,
  labels,
}: {
  screenshots: Screenshot[];
  labels: { close: string; prev: string; next: string };
}) {
  const [open, setOpen] = useState<number | null>(null);
  const isOpen = open !== null;

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((i) =>
        i === null ? i : (i + dir + screenshots.length) % screenshots.length
      ),
    [screenshots.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    // Lock scroll while the lightbox is open.
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, go]);

  return (
    <div>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            onClick={() => setOpen(i)}
            className="glow-hover group block overflow-hidden rounded-xl border border-border bg-surface-2 text-left"
            aria-label={shot.caption}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.caption}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="block px-3 py-2 text-xs text-muted">
              {shot.caption}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={screenshots[open!].caption}
          onClick={close}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/90 p-4 backdrop-blur-md sm:p-8"
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label={labels.close}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev / Next */}
          {screenshots.length > 1 && (
            <>
              <NavButton side="left" label={labels.prev} onClick={() => go(-1)} />
              <NavButton side="right" label={labels.next} onClick={() => go(1)} />
            </>
          )}

          {/* Image */}
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-5xl flex-col items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screenshots[open!].src}
              alt={screenshots[open!].caption}
              className="max-h-[80vh] w-auto rounded-lg border border-border object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-muted">
              {screenshots[open!].caption}{" "}
              <span className="text-faint">
                ({open! + 1}/{screenshots.length})
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

function NavButton({
  side,
  label,
  onClick,
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={label}
      className={`absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-foreground ${
        side === "left" ? "left-3 sm:left-6" : "right-3 sm:right-6"
      }`}
    >
      {side === "left" ? (
        <ChevronLeft className="h-5 w-5" />
      ) : (
        <ChevronRight className="h-5 w-5" />
      )}
    </button>
  );
}
