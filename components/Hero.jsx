'use client';

import dynamic from 'next/dynamic';
import { siteConfig } from '@/lib/data';

// Lazy-load the 3D scene — never blocks initial render
const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function HeroFallback() {
  return (
    <div className="hero-fallback" aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 480 480"
        style={{ opacity: 0.15, maxHeight: '100%' }}
        aria-hidden="true"
      >
        {/* Faint clean geometric node graph as SVG fallback */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const r = 160;
          const cx = 240 + Math.cos(angle) * r;
          const cy = 240 + Math.sin(angle) * r;
          return (
            <g key={i}>
              <circle cx={cx} cy={cy} r="4" fill="#FFFFFF" />
              <line
                x1={240} y1={240}
                x2={cx} y2={cy}
                stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.3"
              />
            </g>
          );
        })}
        <circle cx="240" cy="240" r="7" fill="#FFFFFF" />
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 80;
          const cx = 240 + Math.cos(angle) * r;
          const cy = 240 + Math.sin(angle) * r;
          return (
            <g key={`inner-${i}`}>
              <circle cx={cx} cy={cy} r="2.5" fill="#A1A1AA" opacity="0.5" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero-container">
        {/* Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-status-dot" aria-hidden="true" />
            <span className="text-mono">Available for opportunities</span>
          </div>

          <h1 className="text-display hero-name">
            Surya<br />
            <span className="gradient-text">Tomar</span>
          </h1>

          <p className="hero-title">
            <strong>{siteConfig.title}</strong>
          </p>

          <p className="text-body-lg hero-description">
            {siteConfig.tagline}
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </a>
          </div>

          <div className="hero-meta" role="list" aria-label="Quick stats">
            <div className="hero-meta-item" role="listitem">
              <span className="hero-meta-value">5+</span>
              <span className="hero-meta-label">Projects Built</span>
            </div>
            <div className="hero-meta-item" role="listitem">
              <span className="hero-meta-value">Full</span>
              <span className="hero-meta-label">Stack Coverage</span>
            </div>
            <div className="hero-meta-item" role="listitem">
              <span className="hero-meta-value">AI</span>
              <span className="hero-meta-label">Integrated Apps</span>
            </div>
          </div>
        </div>

        {/* 3D Visual — lazy loaded, non-blocking */}
        <div className="hero-visual" aria-hidden="true">
          <HeroScene />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
