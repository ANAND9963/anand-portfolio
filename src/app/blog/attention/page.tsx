export default function AttentionPage() {
    return (
        <section className="container mt-16 prose dark:prose-invert max-w-3xl">
            <h1>The Paper that Changed AI: Attention Is All You Need</h1>
            <p className="text-sm text-gray-500">Published on Oct 10, 2024</p>

            <p>
                In 2017, Vaswani et al. introduced the groundbreaking paper{" "}
                <strong>“Attention Is All You Need”</strong>, which proposed the{" "}
                <strong>Transformer architecture</strong>. This paper reshaped AI, laying the
                foundation for GPT, BERT, and every modern LLM.
            </p>

            <h2>Key Innovation</h2>
            <ul>
                <li>
                    <strong>Self-Attention:</strong> A mechanism allowing models to weigh the
                    importance of each word relative to others in a sequence.
                </li>
                <li>
                    <strong>Parallelization:</strong> Unlike RNNs, Transformers process sequences
                    in parallel, making training faster.
                </li>
                <li>
                    <strong>Scalability:</strong> Model performance grows predictably with scale.
                </li>
            </ul>

            <h2>Why It Matters</h2>
            <p>
                - Enabled training of massive LLMs like GPT and Gemini.<br />
                - Improved translation, summarization, and question-answering.<br />
                - Sparked the AI revolution we see today.
            </p>

            <h2>My Perspective</h2>
            <p>
                When teaching NLP, I emphasize this paper to students because it illustrates how
                one elegant idea — attention — replaced decades of incremental improvements in
                RNNs and CNNs. It shows how <em>simplicity and scalability</em> drive
                breakthroughs in AI.
            </p>

            <h2>Looking Ahead</h2>
            <p>
                The future of AI lies in scaling Transformers with{" "}
                <strong>multimodal inputs</strong> (text, speech, vision) and{" "}
                <strong>reinforcement learning</strong> for alignment. But it all began with
                “Attention Is All You Need.”
            </p>
        </section>
    )
}
