export default function VoiceBIPage() {
    return (
        <section className="container mt-16 prose dark:prose-invert max-w-3xl">
            <h1>How I Built an AI-Powered BI Dashboard with Voice Commands</h1>
            <p className="text-sm text-gray-500">Published on Jan 15, 2025</p>
            <p>
                I developed a SaaS Business Intelligence Dashboard where non-technical users
                can query data using natural voice commands. The system uses <strong>Azure Whisper</strong>
                for speech-to-text and <strong>OpenAI GPT</strong> for SQL generation.
            </p>
            <h2>Architecture</h2>
            <ul>
                <li>Frontend: React + Tailwind (visual charts, filters, KPIs).</li>
                <li>Backend: Spring Boot microservices + FastAPI for AI pipeline.</li>
                <li>Database: SQL Server (queries generated dynamically).</li>
            </ul>
            <h2>Challenges</h2>
            <p>
                Handling multilingual queries in noisy environments was difficult. I solved
                this by fine-tuning Whisper and adding SQL validation layers.
            </p>
            <h2>Impact</h2>
            <p>
                Reduced data access time by <strong>70%</strong>, improved decision-making speed by <strong>60%</strong>.
            </p>
        </section>
    )
}
