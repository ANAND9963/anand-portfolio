export type Repo = {
    id: number
    name: string
    description: string | null
    html_url: string
    homepage?: string | null
    language?: string | null
    stargazers_count: number
    forks_count: number
    topics?: string[]
    updated_at: string
}


export function ProjectCard({ repo }: { repo: Repo }) {
    const updated = new Date(repo.updated_at).toLocaleDateString()
    return (
        <article className="card p-5">
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{repo.name}</h3>
                <span title="Stars" className="badge">★ {repo.stargazers_count}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-h-10">
                {repo.description || 'No description provided.'}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
                {repo.language && <span className="badge">{repo.language}</span>}
                {repo.topics?.slice(0, 4).map(t => (
                    <span key={t} className="badge">{t}</span>
                ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
                <a className="btn-primary" href={repo.html_url} target="_blank" rel="noreferrer">Code</a>
                {repo.homepage && (
                    <a className="btn-ghost" href={repo.homepage} target="_blank" rel="noreferrer">Live Demo</a>
                )}
            </div>
            <p className="mt-3 text-xs text-gray-500">Updated {updated} · Forks {repo.forks_count}</p>
        </article>
    )
}