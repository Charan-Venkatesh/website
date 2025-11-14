# Charan Venkatesh - Portfolio Website

A modern, high-performance portfolio website showcasing expertise in Applied AI, Business Intelligence, and Data Governance within regulatory-compliant environments.

## 🏗️ Architecture

Built using the JAMstack architecture with:

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (optimized)
- **Performance**: Server-Side Rendering (SSR) + Incremental Static Regeneration (ISR)

## 🚀 Features

### Dynamic GitHub Integration
- Real-time GitHub activity with ISR caching (1-hour revalidation)
- Active Contributor badge based on recent activity
- Repository showcase with language, stars, and update timestamps
- Secure API token handling via environment variables

### Portfolio Sections
- **Home**: Dynamic landing page with credibility metrics
- **Projects**: Categorized by AI/ML, Business Intelligence, and Data Governance
- **Project Details**: STAR methodology (Situation, Task, Action, Results)
- **Publications**: Thought leadership and technical articles
- **Skills**: Comprehensive technical expertise matrix
- **Experience**: Professional journey and achievements
- **Connect**: Contact form and LinkedIn integration

### Compliance & Security Focus
- Dedicated sections highlighting HIPAA/GDPR compliance
- Data governance implementation details
- Security headers configured (CSP, X-Frame-Options, etc.)
- Environment variable security for API tokens

### SEO & Performance
- Optimized metadata for search engines
- Automatic sitemap generation
- Robots.txt configuration
- ISR for dynamic content with static performance
- Tailwind CSS for minimal CSS bundle size

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Charan-Venkatesh/website.git
cd website

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your GitHub token

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
# GitHub Configuration
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=Charan-Venkatesh

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Getting a GitHub Token

1. Go to GitHub Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Generate new token with `public_repo` scope
3. Copy token to `.env.local`

## 📝 Content Management

All content is managed via TypeScript in `lib/data.ts`:

- **Projects**: Add/edit project data with compliance information
- **Publications**: Manage articles and thought leadership
- **Experience**: Update professional experience
- **Education**: Maintain education records
- **Skills**: Update technical skills matrix

## 🎨 Customization

### Branding
- Update colors in `tailwind.config.js`
- Modify navigation in `components/Layout.tsx`
- Change metadata in `app/layout.tsx`

### Content Structure
- Projects follow STAR methodology
- Compliance sections for regulated data systems
- Quantifiable results and metrics emphasized

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Environment Variables in Vercel
- `GITHUB_TOKEN`: Your GitHub Personal Access Token
- `GITHUB_USERNAME`: Charan-Venkatesh
- `NEXT_PUBLIC_SITE_URL`: Your production URL

## 📊 Performance Features

- **ISR**: Content regenerates every hour automatically
- **SSR**: Initial page load optimized for SEO
- **Edge Caching**: Global CDN distribution via Vercel
- **Optimized Images**: Next/Image with automatic optimization
- **Code Splitting**: Automatic per-route code splitting

## 🔒 Security

- Environment variables for sensitive data
- Security headers (X-Frame-Options, CSP, etc.)
- HTTPS enforced in production
- No client-side API token exposure

## 🧪 Development

```bash
# Lint code
npm run lint

# Type checking
npx tsc --noEmit

# Build and test
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Home page
│   ├── projects/             # Projects section
│   ├── publications/         # Publications page
│   ├── skills/               # Skills page
│   ├── experience/           # Experience page
│   ├── connect/              # Contact page
│   ├── sitemap.ts            # Dynamic sitemap
│   └── robots.ts             # Robots.txt
├── components/               # Reusable React components
│   └── Layout.tsx            # Navigation and Footer
├── lib/                      # Business logic and utilities
│   ├── api/                  # API integrations
│   │   └── github.ts         # GitHub API client
│   ├── types/                # TypeScript definitions
│   │   └── index.ts          # Type definitions
│   └── data.ts               # Content data
├── public/                   # Static assets
├── .env.local.example        # Environment variables template
├── vercel.json               # Vercel deployment config
└── package.json              # Dependencies and scripts
```

## 🎯 Key Differentiators

1. **Compliance Focus**: Explicit HIPAA/GDPR compliance documentation
2. **Data Governance**: Detailed governance measures and audit trails
3. **Quantified Results**: Every project includes measurable metrics
4. **STAR Methodology**: Structured project presentation
5. **Dynamic Updates**: GitHub integration with ISR caching
6. **Professional SEO**: Optimized for technical recruiter discovery

## 📄 License

This project is private and proprietary.

## 👤 Author

**Charan Venkatesh**
- LinkedIn: [https://www.linkedin.com/in/charan-venkatesh](https://www.linkedin.com/in/charan-venkatesh)
- GitHub: [https://github.com/Charan-Venkatesh](https://github.com/Charan-Venkatesh)
- Email: charanvenkatesh2004@gmail.com

---

Built with Next.js, TypeScript, and Tailwind CSS. Optimized for performance, security, and professional discovery.
