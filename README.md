# Data Science & AI Portfolio

## Overview
Professional portfolio website showcasing expertise in Applied Artificial Intelligence, Business Intelligence, and Data Governance. Built with modern web technologies and best practices for performance, SEO, and security.

## Tech Stack
- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (recommended)
- **Architecture**: JAMstack with serverless functions
- **Features**: SSR/SSG/ISR for optimal performance

## Key Features

### Dynamic Content
- **GitHub API Integration**: Automatically fetches and displays latest repositories using Incremental Static Regeneration (ISR)
- **1-Hour Cache**: Content stays fresh while maintaining ultra-fast load times
- **Secure Authentication**: GitHub PAT handled securely via environment variables

### Professional Sections
- **Home**: Dynamic landing page with key metrics and achievements
- **Projects**: Featured portfolio projects with detailed impact analysis
- **Experience**: Professional work history with quantifiable achievements
- **Skills**: Comprehensive technical expertise matrix
- **Publications**: Thought leadership and technical writing
- **Connect**: Professional networking and contact options

### Compliance & Governance Focus
Portfolio specifically highlights:
- HIPAA and GDPR compliance expertise
- Data lineage tracking implementations
- Regulatory-compliant system architecture
- Enterprise-grade data integrity measures

## Architecture Highlights

### Performance Optimization
- Server-Side Rendering (SSR) for dynamic content
- Static Site Generation (SSG) for static pages
- Incremental Static Regeneration (ISR) for GitHub data
- Edge caching with 1-hour revalidation
- Optimized Core Web Vitals

### SEO Optimization
- Semantic HTML structure
- Comprehensive metadata and Open Graph tags
- Fast initial page loads
- Mobile-responsive design
- Structured data ready

### Security Best Practices
- Environment variables for sensitive data
- Server-side API proxying
- No client-side credential exposure
- Secure serverless functions

## Project Structure
```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Homepage/landing page
│   ├── api/
│   │   └── github/          # GitHub API integration
│   │       └── route.ts     # Serverless API route with ISR
├── components/              # Reusable React components
├── lib/
│   └── data.ts              # Profile, projects, and experience data
├── types/
│   └── index.ts             # TypeScript type definitions
├── public/                  # Static assets
├── .devcontainer/           # GitHub Codespaces configuration
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 20.x or later
- npm or yarn package manager

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Charan-Venkatesh/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up GitHub Personal Access Token:
   Create a `.env.local` file in the root directory:
   ```
   GITHUB_TOKEN=your_github_pat_here
   ```
   This increases API rate limits but is optional for public repositories.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Configure environment variables (if using GitHub token)
4. Deploy automatically on every push

The site will be optimized automatically with:
- Global CDN distribution
- Automatic HTTPS
- Serverless function optimization
- Edge caching

### Alternative Platforms
Can also be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages

## GitHub Codespaces

This repository includes a `.devcontainer` configuration for instant development environment setup:

1. Click "Code" → "Open with Codespaces" on GitHub
2. Wait for the container to build (installs dependencies automatically)
3. Start coding immediately with pre-configured Node.js 20 environment

## Content Updates

### Updating Projects
Edit `/lib/data.ts` and modify the `projects` array. Each project includes:
- Title, description, and category
- Technologies used
- Quantifiable impact metrics
- Compliance/governance details
- Featured status

### Updating Experience
Edit the `experiences` array in `/lib/data.ts` with new roles and achievements.

### Updating Skills
Modify the `profileData.skills` object to add or remove technical competencies.

## Performance Metrics

Target metrics (achieved with this architecture):
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 95+

## License
ISC

## Author
**Charan Venkatesh**
- Email: charanvenkatesh2004@gmail.com
- LinkedIn: [Connect on LinkedIn](https://www.linkedin.com/in/charan-venkatesh)
- GitHub: [@Charan-Venkatesh](https://github.com/Charan-Venkatesh)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
