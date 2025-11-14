import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation, Footer } from '@/components/Layout';
import { projects } from '@/lib/data';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <Link href="/projects" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Back to Projects
        </Link>

        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{project.title}</h1>
            <p className="text-xl text-slate-600">{project.abstract}</p>
          </div>

          {/* Problem Statement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Problem Statement</h2>
            <p className="text-slate-700 leading-relaxed">{project.problemStatement}</p>
          </section>

          {/* Methodology/Approach */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Approach</h2>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">{project.methodology}</p>
          </section>

          {/* Compliance & Governance */}
          {project.compliance && (
            <section className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Compliance & Data Governance</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Regulatory Standards</h3>
                <div className="flex flex-wrap gap-2">
                  {project.compliance.regulations.map((reg) => (
                    <span 
                      key={reg} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {reg}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Governance Measures Implemented</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {project.compliance.measures.map((measure) => (
                    <li key={measure}>{measure}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Results & Impact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Results & Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {project.results.metrics.map((metric) => (
                <div key={metric.label} className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.label}</div>
                </div>
              ))}
            </div>

            <p className="text-slate-700 leading-relaxed">{project.results.impact}</p>
          </section>

          {/* Tech Stack */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Learnings */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Learnings</h2>
            <p className="text-slate-700 leading-relaxed">{project.learnings}</p>
          </section>

          {/* GitHub Link */}
          {project.githubUrl && (
            <section>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
              >
                View on GitHub →
              </a>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
