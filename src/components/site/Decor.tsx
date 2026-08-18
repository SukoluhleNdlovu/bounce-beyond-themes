/** Decorative balloon + confetti elements. Purely presentational. */

const balloons = [
  { left: "6%", delay: "0s", color: "var(--primary)", size: 46 },
  { left: "22%", delay: "1.4s", color: "var(--sunshine)", size: 34 },
  { left: "72%", delay: "0.8s", color: "var(--sky)", size: 40 },
  { left: "88%", delay: "2.1s", color: "var(--grape)", size: 30 },
];

export function Balloons() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((b, i) => (
        <span
          key={i}
          className="absolute top-10 animate-float rounded-full opacity-40"
          style={{
            left: b.left,
            width: b.size,
            height: b.size * 1.2,
            background: b.color,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}

const confetti = [
  { left: "10%", top: "18%", rotate: "18deg", color: "var(--sunshine)" },
  { left: "35%", top: "8%", rotate: "-24deg", color: "var(--primary)" },
  { left: "58%", top: "22%", rotate: "42deg", color: "var(--sky)" },
  { left: "80%", top: "12%", rotate: "-12deg", color: "var(--tangerine)" },
  { left: "92%", top: "40%", rotate: "30deg", color: "var(--grape)" },
  { left: "18%", top: "62%", rotate: "-40deg", color: "var(--mint)" },
];

export function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {confetti.map((c, i) => (
        <span
          key={i}
          className="absolute h-3 w-1.5 rounded-sm opacity-60 animate-soft-bounce"
          style={{
            left: c.left,
            top: c.top,
            background: c.color,
            transform: `rotate(${c.rotate})`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}
