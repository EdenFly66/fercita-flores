import fs from "fs";
import path from "path";

import PhotoGallery from "./PhotoGallery";
import Reveal from "./Reveal";

const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function getBaalPhotos() {
  const directory = path.join(process.cwd(), "public", "baal");

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => {
      const extension = path.extname(file).toLowerCase();

      return SUPPORTED_EXTENSIONS.includes(extension);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/baal/${encodeURIComponent(file)}`);
}

export default function BaalGallery() {
  const photos = getBaalPhotos();

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--green)]">
            Y por supuesto...
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display mt-5 text-5xl leading-tight sm:text-7xl">
            También tenía que estar ella.
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-5 text-4xl">🐱</p>
        </Reveal>

        <Reveal delay={300}>
          <p className="font-display mt-3 text-3xl italic text-[var(--yellow)]">
            Baal
          </p>
        </Reveal>

        <Reveal delay={400}>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[var(--foreground)]/60 sm:text-base">
            Porque nuestra historia también tiene bigotes, patitas y una
            pequeña protagonista que se ganó su propio espacio.
          </p>
        </Reveal>

        <div className="mt-16">
          {photos.length > 0 ? (
            <PhotoGallery photos={photos} />
          ) : (
            <Reveal>
              <div className="mx-auto flex min-h-80 max-w-md items-center justify-center rounded-3xl border border-dashed border-[var(--yellow-light)] bg-white/50">
                <p className="text-sm text-[var(--foreground)]/40">
                  Agrega fotografías de Baal en public/baal/
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}