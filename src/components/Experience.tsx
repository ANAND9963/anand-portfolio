export function Experience() {
    const jobs = [
        {
            title: "Software Engineer",
            company: "Howden Group Holdings",
            period: "Oct 2021 – Dec 2023",
            bullets: [
                "Engineered distributed microservices and APIs using Java 17, Spring Boot, WebFlux.",
                "Optimized backend processing by 30% with async programming & multithreading.",
                "Implemented real-time data sync with Kafka + React dashboards.",
                "Built CI/CD pipelines with Docker, GitHub Actions, Grafana."
            ]
        },
        {
            title: "Software Engineer",
            company: "Zensar Technologies",
            period: "Aug 2020 – Sep 2021",
            bullets: [
                "Developed scalable microservices using Spring Boot and REST APIs.",
                "Enhanced DB performance with advanced indexing & MongoDB redesign.",
                "Implemented Redis-based caching for reduced latency."
            ]
        },
        {
            title: "Teaching Assistant (NLP/LLM)",
            company: "University of Bridgeport",
            period: "Sep 2024 – Apr 2025",
            bullets: [
                "Taught NLP and LLM concepts, enabling 70% of students to master transformer models.",
                "Guided research on LLMs, applied GPT models for real-world NLP tasks."
            ]
        }
    ]

    return (
        <section className="container mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
                {jobs.map((job, idx) => (
                    <div key={idx} className="card p-6">
                        <h3 className="text-xl font-semibold">{job.title} @ {job.company}</h3>
                        <p className="text-sm text-gray-500 mb-3">{job.period}</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
