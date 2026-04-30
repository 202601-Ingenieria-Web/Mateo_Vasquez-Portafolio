"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

type TextTypeProps = {
  words: string[];
  className?: string;
};

// Efecto de escritura para el efecto de typeo en el hero.

export function TextType({ words, className = '' }: TextTypeProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const sizerRef = useRef<HTMLSpanElement>(null);
  const [isReady, setIsReady] = useState(false);
  const fixedChars = useMemo(() => words.reduce((max, word) => Math.max(max, word.length), 0), [words]);

  useEffect(() => {
    if (!textRef.current || words.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });

      words.forEach((word) => {
        const state = { value: 0 };

        timeline.to(state, {
          value: word.length,
          duration: Math.max(0.8, word.length * 0.05),
          ease: 'none',
          snap: { value: 1 },
          onUpdate: () => {
            if (textRef.current) {
              textRef.current.textContent = word.slice(0, state.value);
            }
          },
        });

        timeline.to({}, { duration: 1.15 });

        timeline.to(state, {
          value: 0,
          duration: Math.max(0.6, word.length * 0.03),
          ease: 'none',
          snap: { value: 1 },
          onUpdate: () => {
            if (textRef.current) {
              textRef.current.textContent = word.slice(0, state.value);
            }
          },
        });
      });
    }, textRef);

    setIsReady(true);

    return () => ctx.revert();
  }, [words]);

  return (
    <span className={`relative inline-block align-baseline whitespace-nowrap ${className}`.trim()} style={{ minWidth: `${Math.max(8, fixedChars + 1)}ch` }}>
      <span ref={sizerRef} className="invisible block select-none" aria-hidden="true">
        {words.reduce((longest, current) => (current.length > longest.length ? current : longest), words[0] ?? '')}
      </span>
      <span className={`absolute inset-0 inline-flex items-baseline ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        <span ref={textRef} className="inline-block" />
        <span className="ml-1 inline-block h-[1.15em] w-[2px] animate-caret bg-current" aria-hidden="true" />
      </span>
    </span>
  );
}
