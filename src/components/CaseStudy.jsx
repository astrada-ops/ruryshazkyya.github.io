import { useEffect } from 'react';
import { projects } from '../data/projects.js';
import { projectHref } from '../lib/route.js';
import { Bullets, Picture, Tags } from './ui.jsx';

export default function CaseStudy({ id }) {
  const index = projects.findIndex((project) => project.id === id && project.caseStudy);
  const project = projects[index];

  useEffect(() => {
    document.title = project ? `${project.title} – Rury Shazkyya Astrada` : 'Project not found – Rury Shazkyya Astrada';
  }, [project]);

  if (!project) {
    return (
      <section className="section case" aria-labelledby="missing-title">
        <div className="wrap">
          <h1 id="missing-title">This project page does not exist.</h1>
          <p className="case__lead">The link may be out of date.</p>
          <a className="text-link" href="#work">
            Back to all work
          </a>
        </div>
      </section>
    );
  }

  const { title, caseStudy } = project;
  const next = projects[(index + 1) % projects.length];
  const nextHref = next.caseStudy ? projectHref(next.id) : `#project-${next.id}`;

  return (
    <article className="case" aria-labelledby="case-title">
      <div className="wrap">
        <a className="text-link case__back" href={`#project-${project.id}`}>
          Back to all work
        </a>
        <header className="case__intro">
          <p className="hero__role">{caseStudy.eyebrow}</p>
          <h1 id="case-title">{title}</h1>
          <p className="case__lead">{caseStudy.lead}</p>
          <dl className="facts">
            {caseStudy.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <Picture {...caseStudy.cover} className="case__cover" eager />

        <div className="case__body">
          <div className="case__sections">
            {caseStudy.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
          <aside className="case__aside" aria-label="Role and technologies">
            <section>
              <h2>My role</h2>
              <Bullets items={caseStudy.role} />
            </section>
            <section>
              <h2>Technologies</h2>
              <Tags items={caseStudy.technologies} />
            </section>
          </aside>
        </div>

        {caseStudy.figure && (
          <figure className="case__figure">
            <Picture image={caseStudy.figure.image} alt={caseStudy.figure.alt} fit="contain" />
            <figcaption>
              <h2>{caseStudy.figure.title}</h2>
              <p>{caseStudy.figure.text}</p>
            </figcaption>
          </figure>
        )}

        <a className="next-project" href={nextHref}>
          <span>
            <span className="meta">Next project</span>
            <span className="next-project__title">{next.title}</span>
          </span>
          <span className="button button--primary" aria-hidden="true">
            View project
          </span>
        </a>
      </div>
    </article>
  );
}
