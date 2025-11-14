import { Navigation, Footer } from '@/components/Layout';
import { experiences, education } from '@/lib/data';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Experience & Education</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Professional journey demonstrating progressive expertise in data science, 
            AI systems, and business intelligence.
          </p>
        </div>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <article key={exp.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                    <p className="text-lg text-slate-700">{exp.organization}</p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-600">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </p>
                    {!exp.endDate && (
                      <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <article key={edu.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-lg text-slate-700">{edu.institution}</p>
                    <p className="text-sm text-slate-500">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-600">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm text-slate-600 mt-1">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Highlights & Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Awards & Recognition</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-2">🏆 Hult Prize Top 3</h3>
                <p className="text-slate-600">
                  Achieved Top 3 position for Sustainable Agriculture System with up to 70% 
                  chemical reduction through data-driven optimization.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-2">🎯 Smart India Hackathon</h3>
                <p className="text-slate-600">
                  Participant demonstrating innovative solutions in AI and data systems 
                  at national level competition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
