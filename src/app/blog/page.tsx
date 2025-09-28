import Link from "next/link"

const posts = [
    {
        slug: "ai-voice-bi",
        title: "How I Built an AI-Powered BI Dashboard with Voice Commands",
        date: "2025-01-15",
        excerpt:
            "Exploring the architecture and challenges behind building a voice-controlled business intelligence dashboard with OpenAI GPT + Azure Whisper.",
    },
    {
        slug: "spring-kafka",
        title: "Optimizing Spring Boot Microservices with Kafka",
        date: "2024-12-02",
        excerpt:
            "How I used Kafka for real-time data synchronization, reducing inter-service latency by 50% in Spring Boot microservices.",
    },
    {
        slug: "nlp-rl",
        title: "NLP Meets Reinforcement Learning",
        date: "2024-11-20",
        excerpt:
            "Exploring how reinforcement learning techniques enhance natural language models, from dialogue systems to RLHF.",
    },
    {
        slug: "attention",
        title: "The Paper that Changed AI: Attention Is All You Need",
        date: "2024-10-10",
        excerpt:
            "A breakdown of Vaswani et al.'s groundbreaking paper that introduced Transformers, powering today’s LLMs like GPT and BERT.",
    },
]

export default function BlogPage() {
    return (
        <section className="container mt-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog / Articles ✍️</h1>
            <div className="space-y-8">
                {posts.map((post) => (
                    <article key={post.slug} className="card p-6">
                        <h2 className="text-2xl font-semibold">
                            <Link href={`/blog/${post.slug}`} className="hover:underline">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="mt-3 inline-block text-brand-600 hover:underline"
                        >
                            Read More →
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}
