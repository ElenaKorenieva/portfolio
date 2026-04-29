const particles = Array.from({ length: 120 }, (_, index) => index);

export default function MagneticParticles() {
  return (
    <div
      className="hero-magnet pointer-events-none absolute left-1/2 top-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 overflow-visible"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <span
          key={particle}
          className="magnet-particle absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-cyan-400/70 shadow-[0_0_22px_rgba(6,182,212,0.75)]"
        />
      ))}
    </div>
  );
}