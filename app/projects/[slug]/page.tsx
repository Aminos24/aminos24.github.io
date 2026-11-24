import {projects} from '../../../lib/content';
import {notFound} from 'next/navigation';
import Link from 'next/link';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.title||'Project',description:p?.summary}}
export default async function Project({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();return <article className="detail"><Link href="/#work">← All projects</Link><div className="eyebrow">{p.category}</div><h1>{p.title}</h1><p className="lead">{p.summary}</p><div className="tags">{p.methods.map(m=><span key={m}>{m}</span>)}</div>{p.sections.map(([title,body])=><section key={title}><h2>{title}</h2><p>{body}</p></section>)}</article>}
