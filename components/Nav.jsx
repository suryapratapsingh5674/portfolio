'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`nav${scrolled ? ' scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')} aria-label="Home">
            <span>{siteConfig.initials}</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${activeSection === link.href ? ' active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <a
              href={siteConfig.links.github}
              className="nav-github-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GitHubIcon />
            </a>
            <a
              href={siteConfig.links.resume}
              className="nav-btn-resume"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              Resume ↗
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        className={`nav-mobile${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-mobile-link"
            onClick={(e) => handleNavClick(e, link.href)}
            style={{ transitionDelay: mobileOpen ? `${i * 0.06}s` : '0s' }}
          >
            {link.label}
          </a>
        ))}
        <a
          href={siteConfig.links.resume}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '1rem' }}
          onClick={() => setMobileOpen(false)}
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.27-.01-1.17-.01-2.14-3.2.69-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.96 10.96 0 0 1 12 6.3c.97.005 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56C20.21 21.42 23.5 17.1 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}
