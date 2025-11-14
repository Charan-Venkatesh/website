import Link from 'next/link';
import { Navigation, Footer } from '@/components/Layout';
import { fetchGitHubUser, fetchGitHubRepos } from '@/lib/api/github';
import { projects } from '@/lib/data';

export const revalidate = 3600; // Revalidate every hour (ISR)

export default async function Home() {
  const username = process.env.GITHUB_USERNAME || 'Charan-Venkatesh';
  const githubUser = await fetchGitHubUser(username);
  const githubRepos = await fetchGitHubRepos(username);
  
  const featuredProjects = projects.filter(p => p.featured);
  const isActiveContributor = githubUser && githubRepos.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            {isActiveContributor && (
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
                ✓ Active Contributor
              </span>
            )}
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Building High-Integrity AI Systems
            </h2>
            <p className="text-xl text-slate-700 mb-6">
              Applied AI Architect specializing in Secure, Regulatory-Compliant Data Systems
            </p>
            <p className="text-lg text-slate-600 max-w-2xl">
              Expertise in Applied Artificial Intelligence, Business Intelligence, and Data Governance 
              within regulatory environments. Bridging the gap between advanced analytics and 
              enterprise-grade system integrity.
            </p>
          </div>
          
          {githubUser && (
            <div className="flex gap-6 text-sm text-slate-600 mb-8">
              <div>
                <span className="font-semibold text-slate-900">{githubUser.public_repos}</span> Public Repositories
              </div>
              <div>
                <span className="font-semibold text-slate-900">{githubUser.followers}</span> Followers
              </div>
              <div>
                <span className="font-semibold text-slate-900">{githubRepos.filter(r => r.stargazers_count > 0).length}</span> Starred Projects
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Link 
              href="/projects" 
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition font-medium"
            >
              View Projects
            </Link>
            <Link 
              href="/connect" 
              className="px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition font-medium"
            >
              Connect with Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-slate-900 mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition group"
            >
              <div className="mb-3">
                <span className="text-sm font-medium text-slate-600">{project.category}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                {project.title}
              </h4>
              <p className="text-slate-600 mb-4 line-clamp-3">
                {project.abstract}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.results.metrics.slice(0, 2).map((metric) => (
                  <span 
                    key={metric.label} 
                    className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
                  >
                    {metric.value}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent GitHub Activity */}
      {githubRepos.length > 0 && (
        <section className="container mx-auto px-6 py-16 bg-white rounded-lg my-8">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Recent GitHub Activity</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {githubRepos.slice(0, 4).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-slate-200 rounded-lg hover:border-slate-400 transition"
              >
                <h4 className="font-bold text-slate-900 mb-1">{repo.name}</h4>
                <p className="text-sm text-slate-600 mb-2 line-clamp-2">
                  {repo.description || 'No description provided'}
                </p>
                <div className="flex gap-3 text-xs text-slate-500">
                  {repo.language && <span>• {repo.language}</span>}
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
