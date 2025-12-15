import { Navigation, Footer } from '@/components/Layout';
import { skills } from '@/lib/data';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Skills & Tools</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Comprehensive technical expertise spanning AI/ML, Business Intelligence, 
            Data Engineering, and Regulatory Compliance.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {Object.entries(skills).map(([category, skillsList]) => (
            <section key={category} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{category}</h2>
              <div className="grid md:grid-cols-3 gap-3">
                {skillsList.map((skill) => (
                  <div 
                    key={skill}
                    className="px-4 py-3 bg-slate-50 rounded-lg text-slate-700 hover:bg-slate-100 transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Methodology Highlight */}
        <div className="max-w-5xl mx-auto mt-12">
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Approach & Methodology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">STAR Framework</h3>
                <p className="text-slate-600">
                  All projects follow the Situation, Task, Action, Results framework to ensure 
                  clear problem definition, methodical execution, and measurable outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Compliance-First Design</h3>
                <p className="text-slate-600">
                  Every system is architected with data governance, security, and regulatory 
                  compliance (HIPAA, GDPR) as foundational requirements, not afterthoughts.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Cross-Functional Collaboration</h3>
                <p className="text-slate-600">
                  Bridge technical and non-technical stakeholders through clear documentation, 
                  visualizations, and stakeholder-appropriate communication.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Continuous Learning</h3>
                <p className="text-slate-600">
                  Active contributor to open source and technical communities, staying current 
                  with emerging AI architectures, BI tools, and governance frameworks.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
