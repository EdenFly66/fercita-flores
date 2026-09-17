"use client";

import Image from "next/image";
import { useState } from "react";

import PhotoModal from "./PhotoModal";

type PhotoGalleryProps = {
  photos: string[];
};

const rotations = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-1",
  "rotate-1",
];

const decorations = ["♡", "✿", "•", "♡", "✦", "♡"];

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => {
          const rotation = rotations[index % rotations.length];
          const decoration = decorations[index % decorations.length];

          return (
            <div
              key={photo}
              className={`mb-8 break-inside-avoid ${rotation} transition-transform duration-500 hover:rotate-0`}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="group relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] focus-visible:ring-offset-4"
              >
                {/* Marco tipo Polaroid */}
                <div className="relative bg-white p-3 pb-12 shadow-[0_8px_25px_rgba(64,58,50,0.12)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_16px_35px_rgba(64,58,50,0.16)] sm:p-4 sm:pb-14">
                  {/* Fotografía */}
                  <div className="relative aspect-square overflow-hidden bg-[#f5f0df]">
                    <Image
                      src={photo}
                      alt={`Baal, recuerdo ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Brillo muy sutil */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5" />
                  </div>

                  {/* Detalle inferior */}
                  <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center sm:bottom-4">
                    <span className="font-display text-xl text-[var(--yellow)]">
                      {decoration}
                    </span>
                  </div>

                  {/* Cinta decorativa */}
                  {index % 3 === 0 && (
                    <div className="absolute -top-2 left-1/2 h-7 w-16 -translate-x-1/2 rotate-[-3deg] bg-[#f4d477]/65 shadow-sm" />
                  )}
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </>
  );
}