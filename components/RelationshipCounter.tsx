"use client";

import { useEffect, useState } from "react";

const START_DATE = new Date(2025, 10, 16);

function getDaysTogether() {
  const today = new Date();

  const start = new Date(
    START_DATE.getFullYear(),
    START_DATE.getMonth(),
    START_DATE.getDate(),
  );

  const current = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const difference = current.getTime() - start.getTime();

  return Math.floor(difference / (1000 * 60 * 60 * 24));
}

export default function RelationshipCounter() {
  const [daysTogether, setDaysTogether] = useState<number | null>(null);

  useEffect(() => {
    setDaysTogether(getDaysTogether());
  }, []);

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-5 font-display text-2xl italic text-[var(--green)]">
        Y mientras pasa el tiempo...
      </p>

      <div className="flex flex-col items-center">
        <span className="font-display text-8xl font-medium leading-none text-[var(--yellow)] sm:text-9xl">
          {daysTogether ?? "—"}
        </span>

        <span className="mt-3 text-sm font-medium uppercase tracking-[0.4em] text-[var(--foreground)]/60">
          días juntos
        </span>
      </div>

      <p className="mt-8 text-sm text-[var(--foreground)]/55">
        Desde el 16 de noviembre de 2025
      </p>

      <p className="mt-2 font-display text-xl italic text-[var(--green)]">
        y contando...
      </p>

      <div className="mt-12 text-3xl">🌼</div>
    </section>
  );
}