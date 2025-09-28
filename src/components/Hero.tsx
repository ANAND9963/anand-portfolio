import Image from "next/image"
export function Hero() {
    return (
        <section className="relative overflow-hidden h-[30vh] flex flex-col items-center justify-center text-center text-white">
            {/* Background gradient animation */}
            <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500" />
            {/* Avatar */}


            <Image
                src="/avatar.jpg"
                alt="Anand Kumar"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full"
            />


            {/* Intro */}
            <h1 className="text-4xl md:text-6xl font-bold">Anand Kumar</h1>
            <p className="mt-4 text-lg">Software Engineer | AI & Cloud Enthusiast</p>
        </section>
    )
}