import fs from "fs";
import path from "path";
import Image from "next/image";

import Reveal from "./Reveal";

const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function getCouplePhoto() {
  const directory = path.join(process.cwd(), "public", "us");

  if (!fs.existsSync(directory)) {
    return null;
  }

  const photo = fs
    .readdirSync(directory)
    .filter((file) => {
      const extension = path.extname(file).toLowerCase();

      return SUPPORTED_EXTENSIONS.includes(extension);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))[0];

  return photo ? `/us/${encodeURIComponent(photo)}` : null;
}

export default function CouplePhoto() {
  const photo = getCouplePhoto();

  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal className="w-full">
          {photo ? (
            <div className="group relative mx-auto w-full max-w-3xl">
              {/* Marco decorativo fino */}
              <div className="relative rounded-[1.5rem] border border-[var(--yellow-light)] bg-white p-2 shadow-[0_12px_35px_rgba(64,58,50,0.12)] sm:p-3">
                {/* Segunda línea decorativa */}
                <div className="rounded-[1.15rem] border border-[var(--yellow-light)]/60 bg-[#fffdf5] p-1.5 sm:p-2">
                  {/* Fotografía */}
                  <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[0.9rem] bg-[#f5f0df]">
                    <Image
                      src={photo}
                      alt="Yerko y Fernanda"
                      fill
                      sizes="(max-width: 640px) 100vw, 768px"
                      className="object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                      priority={false}
                    />
                  </div>
                </div>
              </div>

              {/* Adornos laterales */}
              <span className="absolute -left-4 top-1/2 hidden -translate-y-1/2 text-2xl text-[var(--yellow)] sm:block">
                ✦
              </span>

              <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-[var(--yellow)] sm:block">
                ✦
              </span>
            </div>
          ) : (
            <div className="flex min-h-80 w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--yellow-light)] bg-white/50">
              <p className="text-sm text-[var(--foreground)]/40">
                Agrega nuestra foto en public/us/
              </p>
            </div>
          )}
        </Reveal>

        <Reveal delay={250}>
          <p className="font-display mt-8 max-w-xl text-3xl italic leading-relaxed text-[var(--green)] sm:mt-10 sm:text-4xl">
            Tú, yo y nuestra pequeña familia.
          </p>
        </Reveal>
      </div>
    </section>
  );
}