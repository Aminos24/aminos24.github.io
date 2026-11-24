
import Hero from '../components/Hero';
import Link from 'next/link';
import {
  profile,
  projects,
  experience,
  education
} from '../lib/content';

export default function Home() {
  return (
    <>
      {/* INTRODUCTION */}

      <Hero />


      {/* PROJECTS & RESEARCH */}

      <section id="work">

        <div className="eyebrow">
          01 / SELECTED WORK
        </div>

        <h2>Projects &amp; research</h2>

        <div className="projects">

          {projects.map(p => (

            <Link
              className="project"
              key={p.slug}
              href={'/projects/' + p.slug}
            >

              <div className="project-top">
                <span>
                  {p.number} / {p.category}
                </span>
                <span>↗</span>
              </div>

              <h3>{p.title}</h3>

              <p>{p.summary}</p>

              <div className="tags">

                {p.methods.map(m => (
                  <span key={m}>{m}</span>
                ))}

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* RESEARCH INTERESTS */}

      <section id="research">

        <div className="eyebrow">
          02 / ACADEMIC INTERESTS
        </div>

        <h2>Research interests</h2>

        <div className="split">

          <div>

            <h3>Research focus</h3>

            <p>
              I am particularly interested in
              probabilistic approaches to machine
              learning, Bayesian computation and
              statistical methods that account for
              uncertainty.
            </p>

            <div className="tags">

              {[
                'Bayesian statistics',
                'MCMC',
                'Statistical learning',
                'Time series',
                'Risk modelling'
              ].map(s => (
                <span key={s}>{s}</span>
              ))}

            </div>

          </div>

          <div>

            <h3>Technical toolkit</h3>

            <p>
              Python, R, SQL, Stan, Git, Java
              and statistical computing.
            </p>

          </div>

        </div>

      </section>


      {/* EDUCATION */}

      <section id="education">

        <div className="eyebrow">
          03 / ACADEMIC BACKGROUND
        </div>

        <h2>Education</h2>

        <article className="education-card">

          <div className="education-header">

            {/* UEF LOGO */}

            <div className="university-mark">

              <img
                src="/images/UEF_eng_black.jpeg"
                alt="University of Eastern Finland logo"
                width={100}
                height={100}
              />

            </div>

            <div className="education-info">

              <h3>{education.university}</h3>

              <p className="education-degree">
                {education.degree}
              </p>

              <p className="education-period">
                {education.period}
              </p>

              <p className="education-minor">
                Minor in {education.minor}
                {' · '}
                {education.minorCredits}
              </p>

            </div>

          </div>

          <div className="education-details">

            <div className="education-focus">

              <div className="education-label">
                Academic focus
              </div>

              <ul className="focus-list">

                {education.academicFocus.map(focus => (
                  <li key={focus}>{focus}</li>
                ))}

              </ul>

            </div>

            <div className="education-thesis">

              <div className="education-label">
                Undergraduate research
              </div>

              <h4>{education.thesis.title}</h4>

              <p>{education.thesis.status}</p>

              <Link
                className="education-link"
                href={education.thesis.href}
              >
                View research ↗
              </Link>

            </div>

          </div>

        </article>

      </section>


      {/* PROFESSIONAL EXPERIENCE */}

      <section id="experience">

        <div className="eyebrow">
          04 / PROFESSIONAL BACKGROUND
        </div>

        <h2>Experience</h2>

        {experience.map(e => (

          <article className="job" key={e.role}>

            <div>

              <h3>{e.role}</h3>

              <p className="org">{e.org}</p>

              <p>{e.description}</p>

            </div>

            <span className="date">{e.date}</span>

          </article>

        ))}

      </section>


      {/* CONTACT */}

      <section id="contact">

        <div className="eyebrow">
          05 / CONNECT
        </div>

        <h2>Get in touch</h2>

        <p>
          I am interested in opportunities in
          data science, statistics, analytics
          and research.
        </p>

        <div className="actions">

          {profile.email && (
            <a href={'mailto:' + profile.email}>
              Email ↗
            </a>
          )}

          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          )}

        </div>

      </section>

    </>
  );
}
