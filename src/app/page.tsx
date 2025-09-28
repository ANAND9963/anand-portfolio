// import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ProjectCard } from "@/components/ProjectCard"
// import { Footer } from "@/components/Footer"
import { fetchLatestRepos } from "@/lib/github"
import { LeetCodeStats } from "@/components/LeetCodeStats"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import {Contact} from "@/components/Contact";
import {About} from "@/components/About";
import { Projects } from "@/components/Projects"
import {Certifications} from "@/components/Certifications";


export const revalidate = 3600

export default async function Home() {
    const username = process.env.GH_USERNAME!
    const repos = await fetchLatestRepos({ username, count: 4 })

    return (
        <>
            {/*<Navbar />*/}
            <main className="container flex-1">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                {/* Projects */}
                <section id="projects" className="mt-12">
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
                        <a href="/projects" className="btn-ghost">View all →</a>
                    </div>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repos.map((r) => (
                            <ProjectCard key={r.id} repo={r} />
                        ))}
                    </div>
                </section>
                <Certifications/>
                {/* LeetCode Stats */}
                <LeetCodeStats />
                <Contact />
            </main>
            {/*<Footer />*/}
        </>
    )
}
