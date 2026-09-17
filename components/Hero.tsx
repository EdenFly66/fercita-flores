export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Flores decorativas temporales */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] text-3xl opacity-40">
          🏵️
        </div>

        <div className="absolute right-[12%] top-[25%] text-2xl opacity-30">
          🏵️
        </div>

        <div className="absolute bottom-[20%] left-[18%] text-2xl opacity-30">
          🏵️
        </div>

        <div className="absolute bottom-[15%] right-[20%] text-3xl opacity-40">
          🏵️
        </div>
      </div>

      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[var(--green)]">
        Para ti, Fernanda
      </p>

      <h1 className="font-display text-6xl font-medium leading-none text-[var(--foreground)] sm:text-8xl">
        Un pequeño
        <br />
        pedacito de
        <br />
        nuestro mundo
      </h1>

      <p className="mt-8 max-w-md text-sm leading-7 text-[var(--foreground)]/65 sm:text-base">
        Hecho con flores amarillas, recuerdos y una pequeña gatita
        que también forma parte de nuestra historia.
      </p>

      <div className="mt-12 animate-bounce text-xl text-[var(--yellow)]">
        ↓
      </div>
    </section>
  );
}