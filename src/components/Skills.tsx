import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiSpringboot,
    SiReact,
    SiMongodb,
    SiPostman,
    SiGooglecloud,
    SiAmazon,
} from "react-icons/si"

import { FaJava } from "react-icons/fa"
import { FaMicrosoft } from "react-icons/fa"
import { FaChartBar } from "react-icons/fa"
import { AnimatedCard } from "./AnimatedCard"


export function Skills() {
    const skills = [
        { name: "Java", icon: <FaJava className="w-6 h-6 text-orange-600" /> },
        { name: "Python", icon: <SiPython className="w-6 h-6 text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-600" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-6 h-6 text-green-600" /> },
        { name: "ReactJS", icon: <SiReact className="w-6 h-6 text-cyan-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
        { name: "Azure", icon: <FaMicrosoft className="w-6 h-6 text-blue-600" /> },
        { name: "AWS", icon: <SiAmazon className="w-6 h-6 text-orange-500" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="w-6 h-6 text-red-500" /> },
        { name: "Postman", icon: <SiPostman className="w-6 h-6 text-orange-400" /> },
        { name: "Power BI", icon: <FaChartBar className="w-6 h-6 text-yellow-500" /> },
    ]

    return (
        <section id="skills" className="container mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((s) => (
                    <AnimatedCard key={s.name}>
                        <div className="flex flex-col items-center p-4 hover:shadow-lg transition">
                            {s.icon}
                            <span className="mt-2 font-medium">{s.name}</span>
                        </div>
                    </AnimatedCard>
                ))}
            </div>

        </section>
    )
}
