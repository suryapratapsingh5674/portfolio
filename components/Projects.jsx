'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { projects } from '@/lib/data';

export default function Projects() {
  const featured = projects[0];
  const pair1 = projects.slice(1, 3);
  const pair2 = projects.slice(3, 5);

  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <div>
            <div className="section-label reveal">
              <span className="text-label">Work</span>
            </div>
            <h2 className="text-heading-1 reveal reveal-delay-1">
              Selected Projects
            </h2>
          </div>
          <span className="projects-count text-mono reveal reveal-delay-2">
            {projects.length} projects
          </span>
        </div>

        {/* Featured Project */}
        <article className="project-featured reveal">
          <div>
            <p className="project-number text-mono">Project {featured.id}</p>
            <h3 className="project-title">{featured.name}</h3>
            <p className="project-description">{featured.description}</p>
            <div className="project-tech" role="list" aria-label="Technologies">
              {featured.tech.map((t) => (
                <span key={t} className="tech-pill" role="listitem">{t}</span>
              ))}
            </div>
            <div className="project-links">
              {featured.links.github && featured.links.github !== '#' && (
                <a
                  href={featured.links.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub for ${featured.name}`}
                >
                  <GitHubIcon />
                  GitHub
                </a>
              )}
              {featured.links.demo && featured.links.demo !== '#' && (
                <a
                  href={featured.links.demo}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo for ${featured.name}`}
                >
                  <ExternalLinkIcon />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Visual Preview */}
          <div className="project-visual" aria-hidden="true">
            {featured.image || (featured.icon && (featured.icon.startsWith('/') || featured.icon.startsWith('.'))) ? (
              <Image
                src={featured.image || featured.icon}
                alt={featured.name}
                width={700}
                height={450}
                className="project-visual-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            ) : (
              <div className="project-visual-inner">{featured.icon}</div>
            )}
            <div className="project-visual-overlay" />
          </div>
        </article>

        {/* 2-column grid */}
        <div className="project-horizontal">
          {pair1.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i} />
          ))}
        </div>

        {/* Wide single + small */}
        <div className="project-horizontal">
          {pair2.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i} wide={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay = 0, wide = false }) {
  const cardRef = useRef(null);

  // Mouse-tracking radial highlight
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    card.addEventListener('mousemove', onMouseMove);
    return () => card.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <article
      ref={cardRef}
      className={`project-card reveal reveal-delay-${delay + 1}`}
      style={{ textDecoration: 'none' }}
    >
      <div className="project-card-icon" aria-hidden="true">
        {project.icon}
      </div>
      <p className="project-number text-mono">Project {project.id}</p>
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.tagline}</p>
      <div className="project-tech" role="list" aria-label="Technologies">
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className="tech-pill" role="listitem">{t}</span>
        ))}
        {project.tech.length > 3 && (
          <span className="tech-pill">+{project.tech.length - 3}</span>
        )}
      </div>
      <div className="project-links">
        {project.links.github && project.links.github !== '#' && (
          <a
            href={project.links.github}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub for ${project.name}`}
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
        {project.links.demo && project.links.demo !== '#' && (
          <a
            href={project.links.demo}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo for ${project.name}`}
          >
            <ExternalLinkIcon />
            Demo
          </a>
        )}
      </div>
    </article>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.27-.01-1.17-.01-2.14-3.2.69-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.96 10.96 0 0 1 12 6.3c.97.005 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56C20.21 21.42 23.5 17.1 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
