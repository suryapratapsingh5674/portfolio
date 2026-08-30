'use client';

import { siteConfig } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-label="Contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container">
        <div className="contact-content">
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>
            <span className="text-label">Contact</span>
          </div>

          <h2 className="contact-headline reveal reveal-delay-1">
            Let&rsquo;s build<br />
            <span className="gradient-text">something.</span>
          </h2>

          <p className="contact-subtitle reveal reveal-delay-2">
            I&rsquo;m open to full-time roles, freelance projects, and interesting collaborations.
            If you have something worth building, I want to hear about it.
          </p>

          <div className="contact-actions reveal reveal-delay-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-primary contact-email-btn"
              aria-label={`Send email to ${siteConfig.email}`}
            >
              Send an Email ↗
            </a>
            <a
              href={siteConfig.links.linkedin}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="contact-socials reveal reveal-delay-4">
            <a
              href={siteConfig.links.github}
              className="contact-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href={siteConfig.links.twitter}
              className="contact-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
            >
              <XIcon /> Twitter
            </a>
            <a
              href={siteConfig.links.blog}
              className="contact-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog on Hashnode"
            >
              ✍️ Blog
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="contact-social-link"
              aria-label={`Email: ${siteConfig.email}`}
            >
              ✉️ {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.27-.01-1.17-.01-2.14-3.2.69-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.96 10.96 0 0 1 12 6.3c.97.005 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56C20.21 21.42 23.5 17.1 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
