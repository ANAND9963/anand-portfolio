import type { Repo } from "@/components/ProjectCard"

// Raw GitHub API repo type (only fields we care about)
type GitHubRepo = {
    id: number
    name: string
    description: string | null
    html_url: string
    homepage: string | null
    language: string | null
    stargazers_count: number
    forks_count: number
    topics: string[]
    updated_at: string
    fork: boolean
    archived: boolean
}

/**
 * Build headers for GitHub API request.
 */
function buildHeaders(): HeadersInit {
    const token = process.env.GH_TOKEN

    return token
        ? {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
        }
        : { Accept: "application/vnd.github+json" }
}

/**
 * Fetch latest repositories from GitHub for a given user.
 * @param username GitHub username
 * @param count Number of repositories to fetch (default: 8)
 */
export async function fetchLatestRepos(
    params: { username: string; count?: number }
): Promise<Repo[]> {
    const { username, count = 8 } = params

    if (!username) {
        throw new Error("GitHub username is required")
    }

    const url = new URL(`https://api.github.com/users/${username}/repos`)
    url.searchParams.set("per_page", String(count))
    url.searchParams.set("sort", "updated")

    const response = await fetch(url.toString(), {
        headers: buildHeaders(),
        next: { revalidate: 3600 }, // Cache control for Next.js
    })

    if (!response.ok) {
        console.error("GitHub API error", response.status, await response.text())
        return []
    }

    const repos: GitHubRepo[] = await response.json()

    // Keep only active, non-forked repos and map to your Repo type
    return repos
        .filter((repo) => !repo.fork && !repo.archived)
        .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            topics: repo.topics,
            updated_at: repo.updated_at,
        }))
}
