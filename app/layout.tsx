import type {Metadata} from 'next';
import Link from 'next/link';
import Theme from '../components/Theme';
import './globals.css';
export const metadata:Metadata={title:{default:'Amin Mahad — Data Science & Statistics',template:'%s | Amin Mahad'},description:'Personal academic portfolio exploring statistical modelling, Bayesian inference and data science.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:"try{document.documentElement.dataset.theme=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}"}}/></head><body><header className="header"><Link className="brand" href="/">AM<span>.</span></Link><nav aria-label="Main navigation"><Link href="/#about">About</Link><Link href="/#work">Projects</Link><Link href="/#research">Research</Link><Link href="/#experience">Experience</Link></nav><Theme/></header><main>{children}</main><footer><span>© {new Date().getFullYear()} Amin Mahad</span><span>Data science · Statistics · Computing</span></footer></body></html>}
