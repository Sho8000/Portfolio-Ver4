'use client';

import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimationUpDownProps {
  children:ReactNode;
  duration?:number;
  delay?:number;
}

export default function AnimationUpDown({ children, duration = 2, delay = 0 }:AnimationUpDownProps) {
  const animeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animeRef.current) {
        gsap.to(animeRef.current, {
          y: -10,
          duration,
          delay,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
      });
    }
  }, [duration, delay]);

  return <div ref={animeRef}>{children}</div>;
};