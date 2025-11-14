export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ai-ml' | 'business-intelligence' | 'data-engineering';
  technologies: string[];
  impact: string;
  compliance?: string[];
  githubUrl?: string;
  featured: boolean;
}

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

export interface Publication {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}
