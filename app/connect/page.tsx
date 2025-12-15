'use client';

import { useState } from 'react';
import { Navigation, Footer } from '@/components/Layout';
import { socialLinks } from '@/lib/data';

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // For now, simulate a form submission
      // In production, this would connect to Netlify Forms or a serverless function
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submission:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Let&apos;s Connect</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Interested in collaborating on AI systems, data governance, or business intelligence projects? 
            Let&apos;s discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition font-medium disabled:bg-slate-400 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                  Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or use email directly.
                </div>
              )}
            </form>

            <p className="mt-4 text-sm text-slate-500 text-center">
              Note: This form is currently in demo mode. Please use email or LinkedIn for direct contact.
            </p>
          </div>

          {/* Contact Information & Social Links */}
          <div className="space-y-6">
            {/* LinkedIn Deep Link */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Connect on LinkedIn</h2>
              <p className="text-slate-700 mb-4">
                The best way to connect professionally. When sending a connection request, 
                please mention which project or accomplishment caught your attention.
              </p>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Connect on LinkedIn →
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
              <a 
                href={`mailto:${socialLinks.email}`}
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                {socialLinks.email}
              </a>
              <p className="text-sm text-slate-600 mt-2">
                For formal inquiries and detailed discussions
              </p>
            </div>

            {/* GitHub */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">GitHub</h3>
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {socialLinks.github}
              </a>
              <p className="text-sm text-slate-600 mt-2">
                View code samples and open source contributions
              </p>
            </div>

            {/* Collaboration Areas */}
            <div className="bg-slate-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Open to Discuss</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Applied AI & Machine Learning Projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Data Governance & Compliance Implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Business Intelligence & Analytics Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Technical Consulting & System Architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Research Collaboration Opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
