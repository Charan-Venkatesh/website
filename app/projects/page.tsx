import Link from 'next/link';
import { Navigation, Footer } from '@/components/Layout';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  const aiMlProjects = projects.filter(p => p.category === 'AI/ML');
  const biProjects = projects.filter(p => p.category === 'Business Intelligence');
  const governanceProjects = projects.filter(p => p.category === 'Data Governance');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Projects</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            A curated collection of projects demonstrating expertise in Applied AI, Business Intelligence, 
            and Data Governance within regulatory-compliant environments.
          </p>
        </div>

        {/* AI/ML Projects */}
        {aiMlProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Applied AI & Machine Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {aiMlProjects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.id}`}
                  className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition group"
                >
                  <div className="mb-3">
                    <span className="text-sm font-medium text-blue-600">{project.category}</span>
                    {project.featured && (
                      <span className="ml-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Featured</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {project.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.results.metrics.map((metric) => (
                      <span 
                        key={metric.label} 
                        className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
                      >
                        <strong>{metric.label}:</strong> {metric.value}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Data Governance Projects */}
        {governanceProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Governance & Compliance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {governanceProjects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.id}`}
                  className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition group"
                >
                  <div className="mb-3">
                    <span className="text-sm font-medium text-green-600">{project.category}</span>
                    {project.featured && (
                      <span className="ml-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Featured</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {project.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.results.metrics.map((metric) => (
                      <span 
                        key={metric.label} 
                        className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
                      >
                        <strong>{metric.label}:</strong> {metric.value}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Business Intelligence Projects */}
        {biProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Business Intelligence & Analytics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {biProjects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.id}`}
                  className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition group"
                >
                  <div className="mb-3">
                    <span className="text-sm font-medium text-purple-600">{project.category}</span>
                    {project.featured && (
                      <span className="ml-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Featured</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {project.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.results.metrics.map((metric) => (
                      <span 
                        key={metric.label} 
                        className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
                      >
                        <strong>{metric.label}:</strong> {metric.value}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
