import { NextResponse } from 'next/server';
import type { GitHubRepo } from '@/types';

export const revalidate = 3600; // Revalidate every hour (ISR)

export async function GET() {
  try {
    const username = 'Charan-Venkatesh';
    
    // Use GitHub PAT if available in environment, otherwise use public API
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };
    
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      { 
        headers,
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter and format the repositories
    const formattedRepos = repos
      .filter(repo => !repo.name.includes('fork'))
      .slice(0, 6)
      .map(repo => ({
        name: repo.name,
        description: repo.description || 'No description available',
        html_url: repo.html_url,
        homepage: repo.homepage || '',
        stargazers_count: repo.stargazers_count,
        language: repo.language || 'Not specified',
        updated_at: repo.updated_at,
        topics: repo.topics || []
      }));

    return NextResponse.json({
      repos: formattedRepos,
      lastUpdated: new Date().toISOString()
    }, {
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate'
      }
    });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
