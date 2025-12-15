import { GitHubRepo, GitHubUser } from '../types';

const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
      headers,
      next: { revalidate: 3600 }, // Revalidate every hour (ISR)
    });

    if (!response.ok) {
      console.error('Failed to fetch GitHub user:', response.statusText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers,
        next: { revalidate: 3600 }, // Revalidate every hour (ISR)
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', response.statusText);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function fetchRepoReadme(owner: string, repo: string): Promise<string | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3.raw',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/readme`,
      {
        headers,
        next: { revalidate: 86400 }, // Revalidate daily
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.text();
  } catch (error) {
    console.error('Error fetching README:', error);
    return null;
  }
}
