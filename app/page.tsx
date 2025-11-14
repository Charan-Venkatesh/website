import { profileData, projects, publications, experiences, achievements } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
              {profileData.name}
            </Link>
            <div className="flex gap-6">
              <Link href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Projects
              </Link>
              <Link href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Experience
              </Link>
              <Link href="#publications" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Publications
              </Link>
              <Link href="#connect" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Connect
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {profileData.headline}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
              {profileData.title}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
              {profileData.bio}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">92%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">ML Diagnostic Accuracy</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">45%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Data Integrity Enhancement</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">HIPAA</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Compliant Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Impact:</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{project.impact}</p>
                </div>
                {project.compliance && (
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Compliance:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.compliance.map((comp) => (
                        <span key={comp} className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{exp.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(profileData.skills).map(([category, skills]) => (
              <div key={category} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Thought Leadership & Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub) => (
              <div key={pub.id} className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {pub.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{pub.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{pub.publishedAt}</span>
                  <Link href={pub.url} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl mb-2">🏆</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{achievement.description}</p>
                <span className="text-xs text-slate-500 dark:text-slate-400">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Interested in discussing Applied AI, Data Governance, or collaboration opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md"
            >
              Connect on LinkedIn →
            </a>
            <a 
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg transition shadow-md"
            >
              View GitHub Profile →
            </a>
            <a 
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition shadow-md"
            >
              Send Email →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p className="mb-2">
            {profileData.education.degree}
          </p>
          <p className="text-sm">
            {profileData.education.institution} | {profileData.education.period}
          </p>
          <p className="text-sm mt-4">
            © 2024 {profileData.name}. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
