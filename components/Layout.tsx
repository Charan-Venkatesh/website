import Link from 'next/link';
import { socialLinks } from '@/lib/data';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-slate-700 transition">
            CV
          </Link>
          <div className="flex gap-6">
            <Link href="/projects" className="text-slate-700 hover:text-slate-900 transition">Projects</Link>
            <Link href="/publications" className="text-slate-700 hover:text-slate-900 transition">Publications</Link>
            <Link href="/skills" className="text-slate-700 hover:text-slate-900 transition">Skills</Link>
            <Link href="/experience" className="text-slate-700 hover:text-slate-900 transition">Experience</Link>
            <Link href="/connect" className="text-slate-700 hover:text-slate-900 transition">Connect</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Charan Venkatesh</h3>
            <p className="text-slate-400">Applied AI Architect</p>
          </div>
          <div className="flex gap-6">
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a 
              href={`mailto:${socialLinks.email}`}
              className="text-slate-400 hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
