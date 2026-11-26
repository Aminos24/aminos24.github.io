
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
    <div className="home">

      <Hero />

      {/* PROJECTS */}

      <section id="work">

        <h2>Projects</h2>

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


      {/* INTERESTS */}

      <section id="research">

        <h2>Interests</h2>

        <div className="interests-content">

          <p>
            My main interests are Bayesian inference,
            statistical modelling, Markov Chain Monte Carlo
            (MCMC) methods and machine learning. I am
            particularly interested in how statistical and
            computational methods can be used to understand
            data and uncertainty.
          </p>

          <p>
            I also enjoy working with different stages of
            data analysis, including data cleaning,
            exploration, visualisation, building statistical
            models and interpreting their results.
          </p>

          <p className="toolkit">
            <strong>Tools:</strong> Python, R, SQL, Stan,
            Git and Java.
          </p>

        </div>

      </section>


      {/* EDUCATION */}

      <section id="education">

        <h2>Education</h2>

        <article className="simple-education">

          <div className="education-header">

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

          <div className="simple-thesis">

            <p>
              <strong>Bachelor’s thesis:</strong>{' '}

              <Link href={education.thesis.href}>
                {education.thesis.title} ↗
              </Link>
            </p>

            <p className="thesis-status">
              {education.thesis.status}
            </p>

          </div>

        </article>

      </section>


      {/* EXPERIENCE */}

      <section id="experience">

        <h2>Experience</h2>

        {experience.map(e => (

          <article className="job" key={e.role}>

            <div>
              <h3>{e.role}</h3>
              <p className="org">{e.org}</p>
            </div>

            <span className="date">{e.date}</span>

          </article>

        ))}

      </section>


      {/* CONTACT */}

      <section id="contact" className="simple-contact">

        {profile.email && (
          <a href={`mailto:${profile.email}`}>
            Email
          </a>
        )}

        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}

        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}

      </section>

    </div>
  );
}
