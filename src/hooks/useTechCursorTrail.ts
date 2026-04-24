import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";

const TECH_ICONS = [
  "devicon-react-original colored",
  "devicon-vuejs-original colored",
  "devicon-nuxtjs-original colored",
  "devicon-typescript-plain colored",
  "devicon-nodejs-plain colored",
  "devicon-express-original",
  "devicon-mongodb-plain colored",
  "devicon-redux-original colored",
  "devicon-react-original colored",
  "devicon-django-plain",
  "devicon-html5-plain colored",
  "devicon-css3-plain colored",
  "devicon-sass-original colored",
];

export function useTechCursorTrail(
  containerRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let techIndex = 0;
    const pointer = { x: 0, y: 0 };
    let lastPoint = { x: 0, y: 0 };
    let distance = 0;
    let rafId = 0;

    const createIcon = (x: number, y: number) => {
      const iconClass = TECH_ICONS[techIndex % TECH_ICONS.length];
      techIndex += 1;

      const el = document.createElement("div");
      el.className = "pointer-events-none absolute left-0 top-0 text-[28px]";
      el.innerHTML = `<i class="${iconClass}"></i>`;

      container.appendChild(el);

      const offsetX = gsap.utils.random(-46, 46);
      const offsetY = gsap.utils.random(-44, 16);
      const rotate = gsap.utils.random(-22, 22);
      const scale = gsap.utils.random(0.9, 1.12);

      gsap.set(el, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0.45,
        rotate: 0,
      });

      const tl = gsap.timeline({
        onComplete: () => el.remove(),
      });

      tl.to(el, {
        opacity: 1,
        scale,
        duration: 0.14,
        ease: "power2.out",
      })
        .to(
          el,
          {
            x: x + offsetX,
            y: y - 64 + offsetY,
            rotate,
            duration: 0.95,
            ease: "power2.out",
          },
          0
        )
        .to(
          el,
          {
            opacity: 0,
            scale: 0.78,
            duration: 0.42,
            ease: "power2.in",
          },
          0.52
        );
    };

    const animateTrail = () => {
      const dx = pointer.x - lastPoint.x;
      const dy = pointer.y - lastPoint.y;
      const delta = Math.hypot(dx, dy);

      distance += delta;

      const step = 68;

      if (distance >= step && (dx !== 0 || dy !== 0)) {
        const angle = Math.atan2(dy, dx);
        const count = Math.floor(distance / step);

        for (let i = 0; i < count; i++) {
          const travel = step * (i + 1);

          createIcon(
            lastPoint.x + Math.cos(angle) * travel,
            lastPoint.y + Math.sin(angle) * travel
          );
        }

        distance %= step;
        lastPoint = { ...pointer };
      }

      rafId = requestAnimationFrame(animateTrail);
    };

    const handleMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;

      if (lastPoint.x === 0 && lastPoint.y === 0) {
        lastPoint = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    rafId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [containerRef]);
}