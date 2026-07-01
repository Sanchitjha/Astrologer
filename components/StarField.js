'use client';
import { useMemo } from 'react';

export default function StarField({ count = 60 }) {
  const stars = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${((i * 37 + 13) % 100).toFixed(1)}%`,
      top: `${((i * 53 + 29) % 100).toFixed(1)}%`,
      size: 1 + (i % 3),
      dur: `${2.5 + (i % 5) * 0.6}s`,
      delay: `${(i % 7) * 0.45}s`,
      opacity: 0.15 + (i % 8) * 0.08,
    })), [count],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animation: `twinkle ${s.dur} ${s.delay} ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
