import { projects } from '../../../lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import ProjectResults from '../../../components/ProjectResults';
import ElectricityResults from '../../../components/ElectricityResults';

import QuantumResults, {
  QuantumPortfolio,
  QuantumMethodology
} from '../../../components/QuantumResults';


export function generateStaticParams() {
  return projects.map(p => ({
    slug: p.slug
  }));
}


export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const p = projects.find(p => p.slug === slug);

  return {
    title: p?.title || 'Project',
    description: p?.summary
  };
}


export default async function Project({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const p = projects.find(p => p.slug === slug);

  if (!p) notFound();

  return (
    <article className="detail">

      <Link href="/#work">
        ← All projects
      </Link>

      <div className="eyebrow">
        {p.category}
      </div>

      <h1>{p.title}</h1>

      <p className="lead">
        {p.summary}
      </p>

      <div className="tags">
        {p.methods.map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {p.sections.map(([title, body]) => (
        <section key={title}>

          <h2>{title}</h2>

          {body && <p>{body}</p>}

          {/* Quantum portfolio composition */}

          {p.slug === 'quantum-risk' &&
            title === 'Objective' && (
              <QuantumPortfolio />
            )}

          {/* Quantum methodology */}

          {p.slug === 'quantum-risk' &&
            title === 'Methodology' && (
              <QuantumMethodology />
            )}

          {/* Quantum risk project results */}

          {p.slug === 'quantum-risk' &&
            title === 'Results' && (
              <QuantumResults />
            )}

          {/* Diabetes project results */}

          {p.slug === 'diabetes' &&
            title === 'Results' && (
              <ProjectResults />
            )}

          {/* Electricity forecasting project results */}

          {p.slug === 'electricity-forecasting' &&
            title === 'Results' && (
              <ElectricityResults />
            )}

        </section>
      ))}

      {/* Project documentation */}

      {p.pdf && (
        <section>

          <h2>Project documentation</h2>

          <p>
            Read the full project report for a detailed
            description of the methodology, statistical
            analysis and results.
          </p>

          <div className="actions">
            <a
              className="primary"
              href={p.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read full report (PDF) ↗
            </a>
          </div>

        </section>
      )}

    </article>
  );
}