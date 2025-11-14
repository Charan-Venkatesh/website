export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface ProjectData {
  id: string;
  title: string;
  abstract: string;
  category: 'AI/ML' | 'Business Intelligence' | 'Data Governance';
  problemStatement: string;
  methodology: string;
  compliance?: {
    regulations: string[];
    measures: string[];
  };
  results: {
    metrics: { label: string; value: string }[];
    impact: string;
  };
  techStack: string[];
  githubUrl?: string;
  learnings: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  abstract: string;
  publishedDate: string;
  url: string;
  type: 'article' | 'research' | 'blog';
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  highlights: string[];
}
