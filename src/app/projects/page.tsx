// import { Navbar } from '@/components/Navbar'
// import { Footer } from '@/components/Footer'
import { ProjectCard } from '@/components/ProjectCard'
import { fetchLatestRepos } from '@/lib/github'


export const revalidate = 3600


export default async function ProjectsPage() {
    const username = process.env.GH_USERNAME!
    const repos = await fetchLatestRepos({ username, count: 12 })


    return (
        <>
            {/*<Navbar />*/}
            <main className="container flex-1 py-8">
                <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Latest repositories from GitHub (non-forks).</p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((r) => (
                        <ProjectCard key={r.id} repo={r} />
                    ))}
                </div>
            </main>
            {/*<Footer />*/}
        </>
    )
}