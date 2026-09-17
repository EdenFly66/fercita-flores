"use client";

import Image from "next/image";
import { useEffect } from "react";

type PhotoModalProps = {
  photo: string | null;
  onClose: () => void;
};

export default function PhotoModal({
  photo,
  onClose,
}: PhotoModalProps) {
  useEffect(() => {
    if (!photo) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [photo, onClose]);

  if (!photo) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Fotografía ampliada"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar fotografía"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition-colors hover:bg-white/20"
      >
        ×
      </button>

      <div className="relative max-h-[90vh] max-w-[95vw]">
        <Image
          src={photo}
          alt="Fotografía ampliada de Baal"
          width={1600}
          height={1600}
          sizes="95vw"
          className="max-h-[90vh] w-auto rounded-2xl object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}