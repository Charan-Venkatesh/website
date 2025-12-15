import { Navigation, Footer } from '@/components/Layout';
import { publications } from '@/lib/data';

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Publications & Thought Leadership</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Technical articles and research demonstrating expertise in AI architecture, 
            data analytics, and modern engineering practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub) => (
            <article 
              key={pub.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-sm font-medium text-blue-600 capitalize">{pub.type}</span>
                </div>
                <span className="text-sm text-slate-500">{pub.publishedDate}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{pub.title}</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">{pub.abstract}</p>
              
              {pub.url !== '#' ? (
                <a 
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition text-sm"
                >
                  Read Article →
                </a>
              ) : (
                <span className="text-sm text-slate-400">Coming soon</span>
              )}
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-xl font-bold text-slate-900 mb-2">More Content</h3>
          <p className="text-slate-700 mb-4">
            I regularly share insights on AI architecture, data governance, and analytics automation. 
            Follow me on LinkedIn for the latest articles and thought leadership content.
          </p>
          <a 
            href="https://www.linkedin.com/in/charan-venkatesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Follow on LinkedIn
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
