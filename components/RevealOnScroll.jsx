'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    // Check prefers-reduced-motion — if enabled, reveal all immediately
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal');

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02, // Trigger immediately when element enters viewport
        rootMargin: '0px 0px -20px 0px', // Fluid trigger margin
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
