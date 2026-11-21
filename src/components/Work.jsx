import { moreProjects, projects } from '../data/projects.js';
import { projectHref } from '../lib/route.js';
import { Bullets, ButtonLink, Picture, Tags } from './ui.jsx';

function Project({ project, reverse }) {
  const { id, title, meta, summary, points, tags, images, links, caseStudy } = project;
  const hasLinks = caseStudy || links.demo || links.source;

  return (
    <article id={`project-${id}`} className={`project${reverse ? ' project--reverse' : ''}`}>
      <div className={`project__media${images.length > 1 ? ' project__media--pair' : ''}`}>
        {images.map((picture) => (
          <Picture key={picture.image} {...picture} className={picture.tall ? 'picture--tall' : ''} />
        ))}
      </div>
      <div className="project__body">
        <div>
          <h3>{title}</h3>
          <p className="meta">{meta}</p>
        </div>
        <p>{summary}</p>
        <Bullets items={points} />
        <Tags items={tags} />
        {hasLinks && (
          <div className="project__links">
            {caseStudy && (
              <a className="text-link" href={projectHref(id)}>
                Read the case study
              </a>
            )}
            {links.demo && <ButtonLink href={links.demo}>Live demo</ButtonLink>}
            {links.source && (
              <ButtonLink href={links.source} variant="secondary">
                Source code
              </ButtonLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <>
      <section id="work" className="section" aria-labelledby="work-title">
        <div className="wrap">
          <header className="section__head">
            <h2 id="work-title">Selected work</h2>
            <p>Web apps I built, UI design in Figma, a machine learning final project, and testing work from my internships.</p>
          </header>
          <div className="projects">
            {projects.map((project, index) => (
              <Project key={project.id} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {moreProjects.length > 0 && (
        <section className="section section--small" aria-labelledby="more-title">
          <div className="wrap">
            <h3 id="more-title" className="subhead">
              More projects
            </h3>
            <div className="cards">
              {moreProjects.map((item) => (
                <article key={item.id} className="card">
                  <Picture {...item.image} />
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                  <Tags items={item.tags} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
