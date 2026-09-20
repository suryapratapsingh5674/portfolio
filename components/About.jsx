'use client';

import Image from 'next/image';
import { siteConfig, blogPosts } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="section about" aria-label="About Surya">
      <div className="container">
        <div className="section-label reveal">
          <span className="text-label">About</span>
        </div>

        <div className="about-grid">
          {/* Left: Profile + bio */}
          <div className="about-profile reveal">
            <div className="about-avatar-wrapper">
              <Image
                src="/me.jpg"
                alt={siteConfig.name}
                width={110}
                height={110}
                priority
                className="about-avatar"
              />
            </div>

            <div>
              <h2 className="text-heading-1" style={{ marginBottom: '0.75rem' }}>
                Surya<br />
                <span className="gradient-text">Tomar</span>
              </h2>
              <p className="text-mono" style={{ marginBottom: '1.25rem' }}>
                Full-Stack Developer · India
              </p>
            </div>

            <div className="about-bio">
              {siteConfig.bio.map((para, i) => (
                <p key={i} className="text-body">{para}</p>
              ))}
            </div>

            <div className="about-links">
              <a
                href={siteConfig.links.github}
                className="about-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href={siteConfig.links.linkedin}
                className="about-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href={siteConfig.links.twitter}
                className="about-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <XIcon />
                Twitter
              </a>
              <a
                href={siteConfig.links.blog}
                className="about-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashnode Blog"
              >
                ✍️ Blog
              </a>
            </div>
          </div>

          {/* Right: Philosophy + cert + blog */}
          <div className="about-right">
            <div className="about-philosophy reveal reveal-delay-1">
              <p className="text-label" style={{ marginBottom: '0.75rem' }}>Philosophy</p>
              <blockquote className="about-philosophy-quote">
                &ldquo;{siteConfig.philosophy}&rdquo;
              </blockquote>
            </div>

            {/* Achievements */}
            <div className="about-achievements reveal reveal-delay-2">
              <p className="text-label" style={{ marginBottom: '0.75rem' }}>Achievements</p>
              <div className="about-achievements-list">
                <div className="about-achievement-item">
                  <span className="about-achievement-icon" aria-hidden="true">⚡</span>
                  <div>
                    <p className="about-achievement-title">80+ LeetCode Problems Solved</p>
                    <p className="about-achievement-desc">Consistently sharpening algorithmic thinking and problem-solving skills across data structures, dynamic programming, and more.</p>
                  </div>
                </div>
                <div className="about-achievement-item">
                  <span className="about-achievement-icon" aria-hidden="true">🏆</span>
                  <div>
                    <p className="about-achievement-title">Kodr Hackathon — 1st Place</p>
                    <p className="about-achievement-desc">Secured first place at the Kodr Hackathon, delivering a fully functional product under pressure within a competitive time limit.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog posts */}
            <div className="reveal reveal-delay-2">
              <p className="text-label" style={{ marginBottom: '0.75rem' }}>
                <a
                  href={siteConfig.links.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Writing ↗
                </a>
              </p>
              <div className="about-blog-list">
                {blogPosts.map((post) => (
                  <a
                    key={post.title}
                    href={post.url}
                    className="about-blog-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read: ${post.title}`}
                  >
                    <div style={{ flex: 1 }}>
                      <p className="about-blog-item-title">{post.title}</p>
                    </div>
                    <span className="about-blog-item-date">{post.date}</span>
                    <span className="about-blog-item-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
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

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
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
