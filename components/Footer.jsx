'use client';

import { siteConfig } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-name">{siteConfig.name}</span>
            <span className="footer-copy">
              © {year} · All rights reserved
            </span>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a
              href={siteConfig.links.github}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.twitter}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
            >
              Twitter
            </a>
            <a
              href={siteConfig.links.blog}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog"
            >
              Blog
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
