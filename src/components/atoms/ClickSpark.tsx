"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Efecto visual global para dar feedback en cada click.
export function ClickSpark() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      const burst = document.createElement('div');
      burst.className = 'click-spark-burst';
      burst.style.left = `${event.clientX}px`;
      burst.style.top = `${event.clientY}px`;
      layer.appendChild(burst);

      const rays = Array.from({ length: 10 }, (_, index) => {
        const ray = document.createElement('span');
        ray.className = 'click-spark-ray';
        ray.style.transform = `rotate(${index * 36}deg) translateY(-4px)`;
        burst.appendChild(ray);
        return ray;
      });

      const tl = gsap.timeline({
        onComplete: () => {
          burst.remove();
        },
      });

      tl.fromTo(
        rays,
        { scaleY: 0.2, opacity: 1, transformOrigin: '50% 0%' },
        {
          scaleY: 1.45,
          opacity: 0,
          y: -16,
          duration: 0.42,
          ease: 'power2.out',
          stagger: 0.012,
        },
      );
    };

    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, []);

  return <div ref={layerRef} className="pointer-events-none fixed inset-0 z-[80]" aria-hidden="true" />;
}
