"use client";

type Flower = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
};

const flowers: Flower[] = [
  {
    id: 1,
    left: 6,
    size: 22,
    delay: 0,
    duration: 19,
    rotation: -8,
  },
  {
    id: 2,
    left: 14,
    size: 30,
    delay: 5,
    duration: 23,
    rotation: 12,
  },
  {
    id: 3,
    left: 24,
    size: 19,
    delay: 9,
    duration: 17,
    rotation: -15,
  },
  {
    id: 4,
    left: 34,
    size: 27,
    delay: 2,
    duration: 22,
    rotation: 7,
  },
  {
    id: 5,
    left: 44,
    size: 21,
    delay: 7,
    duration: 20,
    rotation: -12,
  },
  {
    id: 6,
    left: 55,
    size: 32,
    delay: 11,
    duration: 24,
    rotation: 15,
  },
  {
    id: 7,
    left: 66,
    size: 20,
    delay: 4,
    duration: 18,
    rotation: -6,
  },
  {
    id: 8,
    left: 76,
    size: 28,
    delay: 8,
    duration: 21,
    rotation: 10,
  },
  {
    id: 9,
    left: 87,
    size: 23,
    delay: 1,
    duration: 20,
    rotation: -14,
  },
  {
    id: 10,
    left: 94,
    size: 31,
    delay: 6,
    duration: 25,
    rotation: 5,
  },
  {
    id: 11,
    left: 10,
    size: 18,
    delay: 13,
    duration: 22,
    rotation: 16,
  },
  {
    id: 12,
    left: 29,
    size: 25,
    delay: 10,
    duration: 19,
    rotation: -10,
  },
  {
    id: 13,
    left: 49,
    size: 20,
    delay: 3,
    duration: 23,
    rotation: 8,
  },
  {
    id: 14,
    left: 71,
    size: 26,
    delay: 12,
    duration: 18,
    rotation: -18,
  },
  {
    id: 15,
    left: 90,
    size: 19,
    delay: 7,
    duration: 21,
    rotation: 13,
  },
];

export default function FlowerBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {flowers.map((flower) => (
        <span
          key={flower.id}
          className="flower"
          style={{
            left: `${flower.left}%`,
            fontSize: `${flower.size}px`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            "--flower-rotation": `${flower.rotation}deg`,
          } as React.CSSProperties}
        >
          🌼
        </span>
      ))}
    </div>
  );
}