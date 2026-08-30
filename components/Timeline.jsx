'use client';

import { timeline } from '@/lib/data';

export default function Timeline() {
  return (
    <section id="journey" className="section" aria-label="Certifications and Journey">
      <div className="container">
        <div className="section-label reveal">
          <span className="text-label">Journey</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
          <h2 className="text-heading-1 reveal reveal-delay-1">
            How I Got Here
          </h2>
          <p className="text-body-lg reveal reveal-delay-2" style={{ maxWidth: '560px' }}>
            Education, professional specializations, and rigorous full-stack engineering bootcamps.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true" />
          {timeline.map((item, i) => (
            <div
              key={item.title}
              className={`timeline-item reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '0.5rem' }}>
                <span className="timeline-date">{item.date}</span>
                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-cred-btn"
                    aria-label={`Verify credential for ${item.title}`}
                  >
                    Verify Credential ↗
                  </a>
                )}
              </div>

              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <p className="timeline-desc">{item.description}</p>

              {item.tags && (
                <div
                  className="project-tech"
                  role="list"
                  aria-label="Technologies"
                  style={{ marginTop: '1rem' }}
                >
                  {item.tags.map((tag) => (
                    <span key={tag} className="tech-pill" role="listitem">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
