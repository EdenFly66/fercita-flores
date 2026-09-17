import CouplePhoto from "./CouplePhoto";
import Reveal from "./Reveal";

export default function FinalSection() {
  return (
    <>
      <CouplePhoto />

      <div className="section-divider" aria-hidden="true">
        <span className="text-sm text-[var(--yellow)]">✦</span>
      </div>

      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 py-32 text-center">
        <Reveal>
          <div className="soft-pulse mb-10 text-3xl">🌼</div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--green)]">
            Y después de todo...
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="font-display mt-8 text-5xl leading-tight sm:text-7xl">
            Solo quería
            <br />
            recordarte algo.
          </p>
        </Reveal>

        <Reveal delay={500}>
          <p className="love-glow font-display mt-10 text-5xl italic text-[var(--yellow)] sm:text-7xl">
            Te amo infinito
          </p>
        </Reveal>
      </section>

      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
        <Reveal>
          <div className="soft-pulse mb-8 text-4xl">🌼</div>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-display text-5xl sm:text-7xl">
            Fernanda
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="love-glow font-display mt-5 text-5xl italic text-[var(--yellow)] sm:text-7xl">
            Te amo infinito
          </p>
        </Reveal>

        <Reveal delay={500}>
          <p className="mt-10 text-3xl">🐱</p>
        </Reveal>

        <Reveal delay={650}>
          <p className="mt-5 text-xs uppercase tracking-[0.4em] text-[var(--foreground)]/40">
            Con amor, Yerko
          </p>
        </Reveal>
      </section>
    </>
  );
}