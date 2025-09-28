import {AnimatedCard} from "@/components/AnimatedCard";
import Image from "next/image"

export function Projects() {
    const projects = [
        {
            title: "Voice-Activated Business Intelligence Dashboard",
            description:
                "A SaaS platform that enables non-technical users to interact with business data using natural voice queries, powered by AI-driven SQL generation and real-time visualization.",
            image: "/projects/voice-bi.png", // put screenshot in /public/projects
            tech: [
                "React",
                "Spring Boot",
                "Azure Whisper",
                "OpenAI GPT-4o",
                "FastAPI",
                "SQL Server",
                "JWT Auth",
            ],
            challenges: [
                "Converting noisy multilingual voice input to accurate SQL queries.",
                "Reducing query-to-insight latency by 70%.",
                "Ensuring data protection and role-based access control.",
            ],
            impact: [
                "95% SQL generation accuracy across varied accents and languages.",
                "60% improvement in decision-making speed with real-time dashboards.",
                "Deployed as a secure, scalable SaaS for SMBs.",
            ],
            demo: "#", // replace with live demo if available
            github: "https://github.com/ANAND9963/Voice-BI-Dashboard", // adjust repo
        },
        {
            title: "CloudKitchen SaaS Platform",
            description:
                "A full-stack cloud kitchen management platform for restaurant orders, customer management, and real-time kitchen dashboards.",
            image: "/projects/cloudkitchen.png",
            tech: [
                "Next.js 15",
                "Node.js/Express",
                "MongoDB",
                "TailwindCSS",
                "JWT Auth",
                "Netlify CI/CD",
            ],
            challenges: [
                "Implemented secure multi-role access (owners, customers, kitchen staff).",
                "Resolved CORS & deployment pipeline issues on Netlify.",
                "Optimized real-time order updates and payment integration.",
            ],
            impact: [
                "Enabled end-to-end restaurant operations in a cloud-native setup.",
                "Improved customer experience with responsive UI and order tracking.",
                "Automated builds and deployments using CI/CD pipelines.",
            ],
            demo: "https://cloud-kitchen-client.vercel.app",
            github: "https://github.com/ANAND9963/CloudKitchen",
        },
        // {
        //     title: "JobApp Microservice",
        //     description:
        //         "A Spring Boot + MySQL microservice for managing job postings and applications.",
        //     image: "/projects/jobapp.png",
        //     tech: ["Spring Boot", "MySQL", "Lombok", "REST APIs"],
        //     challenges: [
        //         "Designed entity relationships with JPA for scalability.",
        //         "Optimized SQL queries and indexing strategies.",
        //         "Handled role-based access and transaction safety.",
        //     ],
        //     impact: [
        //         "Delivered a clean and extensible microservice template.",
        //         "Improved query performance under high load.",
        //     ],
        //     demo: "#",
        //     github: "https://github.com/ANAND9963/JobApp",
        // },
    ]

    return (
        <section id="projects" className="container mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
            <div className="space-y-12">
                {projects.map((p, i) => (
                    <AnimatedCard key={i}>
                    <div  className="card p-6 lg:flex gap-6">
                        {/* Image */}
                        <div className="flex-shrink-0 lg:w-1/3">
                            <Image
                                src={p.image}
                                alt={p.title}
                                width={600}   // adjust depending on design
                                height={400}
                                className="rounded-xl shadow-md object-cover w-full"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-4">
                            <h3 className="text-xl font-semibold">{p.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{p.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="badge bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            {/* Challenges */}
                            <div>
                                <h4 className="font-semibold mt-2">Challenges Solved</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                                    {p.challenges.map((c, idx) => (
                                        <li key={idx}>{c}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Impact */}
                            <div>
                                <h4 className="font-semibold mt-2">Impact</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                                    {p.impact.map((c, idx) => (
                                        <li key={idx}>{c}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 mt-3">
                                {p.demo && p.demo !== "#" && (
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-primary"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-ghost"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    </AnimatedCard>
                ))}
            </div>
        </section>
    )
}
