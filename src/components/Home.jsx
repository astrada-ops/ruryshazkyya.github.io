import { certificates, education, experience, skillGroups } from '../data/profile.js';
import { site } from '../data/site.js';
import { Bullets, ButtonLink, Picture } from './ui.jsx';
import Work from './Work.jsx';

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__inner">
        <div className="hero__text">
          <p className="hero__role">{site.role}</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="hero__lead">{site.tagline}</p>
          <div className="actions">
            <ButtonLink href="#work">See my work</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>
        </div>
        <figure className="hero__photo">
          <Picture {...site.photo} eager />
          <figcaption>{site.photoCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Now() {
  return (
    <section className="now" aria-label="Current role">
      <div className="wrap now__inner">
        <span className="dot" aria-hidden="true" />
        <p>
          <strong>Now:</strong> {site.now}
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="experience-title">Experience</h2>
        </header>
        <ol className="jobs">
          {experience.map((job) => (
            <li key={job.id} className="job">
              <div className="job__when">
                <p className="job__period">
                  {job.current && <span className="dot" aria-hidden="true" />}
                  {job.period}
                </p>
                <p className="meta">{job.place}</p>
              </div>
              <div className="job__what">
                <div>
                  <h3>{job.role}</h3>
                  <p className="meta">{job.company}</p>
                </div>
                <Bullets items={job.points} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="skills-title">Skills</h2>
        </header>
        <div className="skills">
          {skillGroups.map((group) => (
            <div key={group.id} className="skill-group">
              <h3>{group.name}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="education-title">Education</h2>
        </header>
        <div className="education">
          <Picture {...education.photo} className="education__photo" />
          <div className="education__text">
            <p className="meta">{education.period}</p>
            <h3>{education.degree}</h3>
            <p className="education__school">
              {education.school}, {education.gpa}
            </p>
            <p className="muted">{education.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section className="section section--small" aria-labelledby="certs-title">
      <div className="wrap">
        <h3 id="certs-title" className="subhead">
          Certificates
        </h3>
        <div className="cards">
          {certificates.map((item) => (
            <figure key={item.id} className="certificate">
              <Picture {...item.image} fit="contain" />
              <figcaption>
                <span className="certificate__title">{item.title}</span>
                <span className="meta">{item.issuer}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { linkedin, github, cv } = site.links;
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact__panel">
          <div className="contact__text">
            <h2 id="contact-title">Let&rsquo;s work together.</h2>
            <p>I am looking for a junior front end or fullstack developer role. Email is the fastest way to reach me.</p>
            <div className="actions">
              <ButtonLink href={`mailto:${site.email}`}>{site.email}</ButtonLink>
              {linkedin && (
                <ButtonLink href={linkedin} variant="secondary">
                  LinkedIn
                </ButtonLink>
              )}
              {github && (
                <ButtonLink href={github} variant="secondary">
                  GitHub
                </ButtonLink>
              )}
              {cv && (
                <ButtonLink href={cv} variant="secondary">
                  Download CV
                </ButtonLink>
              )}
            </div>
            <p className="meta">{site.location}</p>
          </div>
          <Picture {...site.portrait} className="contact__photo" position="center 30%" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Now />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <Certificates />
      <Contact />
    </>
  );
}
