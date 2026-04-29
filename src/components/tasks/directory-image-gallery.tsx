"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ContentImage } from "@/components/shared/content-image";

type DirectoryImageGalleryProps = {
  images: string[];
  title: string;
};

export function DirectoryImageGallery({ images, title }: DirectoryImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative h-24 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 text-left transition hover:border-amber-400"
          >
            <ContentImage src={image} alt={`${title} photo ${index + 1}`} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow transition hover:bg-slate-100"
              aria-label="Close image popup"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[16/10] w-full">
              <ContentImage src={activeImage} alt={`${title} enlarged image`} fill className="object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

