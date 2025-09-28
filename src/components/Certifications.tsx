import Image from "next/image"


export function Certifications() {
    const certs = [
        {
            title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
            issuer: "Microsoft",
            date: "2024",
            logo: "/certs/az104.png", // add in /public/certs
            link: "https://learn.microsoft.com/en-us/users/yannamanenianandkumar-5633/credentials/165078cf33874d77", // official link
        },
        {
            title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
            issuer: "Microsoft",
            date: "2024",
            logo: "/certs/az900.png",
            link: "https://learn.microsoft.com/en-us/users/yannamanenianandkumar-5633/credentials/fb6d99b7a229bdb3",
        },
    ]

    return (
        <section id="certifications" className="container mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Certifications & Achievements 🏆</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certs.map((c, i) => (
                    <a
                        key={i}
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="card p-6 flex items-center gap-4 hover:shadow-lg transition"
                    >
                        {c.logo && (
                            <Image
                                src={c.logo}
                                alt={c.title}
                                width={64}
                                height={64}
                                className="w-16 h-16 object-contain"
                            />

                        )}
                        <div>
                            <h3 className="font-semibold">{c.title}</h3>
                            <p className="text-sm text-gray-500">{c.issuer} · {c.date}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
