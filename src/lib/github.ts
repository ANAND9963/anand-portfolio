export type { Repo } from '@/components/ProjectCard'


const headers = () => {
    const token = process.env.GH_TOKEN
    return token
        ? {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github+json'
        }
        : { Accept: 'application/vnd.github+json' }
}


export async function fetchLatestRepos({ username, count = 8 }: { username: string; count?: number }) {
    if (!username) throw new Error('GH_USERNAME is not set')


    const url = new URL(`https://api.github.com/users/${username}/repos`)
    url.searchParams.set('per_page', String(count))
    url.searchParams.set('sort', 'updated')


    const res = await fetch(url, {
        headers: headers(),
// Revalidate controlled by calling component
        next: { revalidate: 3600 }
    })


    if (!res.ok) {
        console.error('GitHub API error', res.status, await res.text())
        return []
    }


    const data = (await res.json()) as any[]
// Filter out forks and archived repos; map to lightweight shape
    return data
        .filter((r) => !r.fork && !r.archived)
        .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            html_url: r.html_url,
            homepage: r.homepage,
            language: r.language,
            stargazers_count: r.stargazers_count,
            forks_count: r.forks_count,
            topics: r.topics,
            updated_at: r.updated_at,
        }))
}