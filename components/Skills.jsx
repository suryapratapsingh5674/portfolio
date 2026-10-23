'use client';

import { skills } from '@/lib/data';

const skillKeys = ['frontend', 'backend', 'ai', 'database', 'tools'];

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-label="Skills and Technologies">
      <div className="container">
        <div className="section-label reveal">
          <span className="text-label">Capabilities</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <h2 className="text-heading-1 reveal reveal-delay-1">
            Tools I Build With
          </h2>
          <p className="text-body-lg reveal reveal-delay-2" style={{ maxWidth: '520px' }}>
            A focused toolkit — each technology chosen because it&rsquo;s the right tool for the job.
          </p>
        </div>

        <div className="skills-grid">
          {skillKeys.map((key, i) => {
            const group = skills[key];
            return (
              <div
                key={key}
                className={`skill-group reveal reveal-delay-${i + 1}`}
              >
                <div className="skill-group-header">
                  <div className="skill-group-icon" aria-hidden="true">
                    {group.icon}
                  </div>
                  <span className="skill-group-title">{group.label}</span>
                </div>
                <ul role="list" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {group.items.map((item) => (
                    <li key={item}>
                      <div className="skill-item">
                        <span className="skill-dot" aria-hidden="true" />
                        <span className="skill-name">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
