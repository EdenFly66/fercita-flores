import Reveal from "./Reveal";

export default function LoveMessage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-32 text-center">
      <Reveal>
        <div className="soft-pulse mb-10 text-3xl">🌼</div>
      </Reveal>

      <Reveal delay={150}>
        <p className="max-w-xl font-display text-3xl leading-relaxed sm:text-5xl">
          De todas las cosas bonitas que existen en este mundo...
        </p>
      </Reveal>

      <Reveal delay={350}>
        <p className="love-glow font-display mt-8 text-5xl italic text-[var(--yellow)] sm:text-7xl">
          Te amo infinito
        </p>
      </Reveal>
    </section>
  );
}