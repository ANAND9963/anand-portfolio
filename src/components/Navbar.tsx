"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { Mail, Github, Linkedin } from "lucide-react" // icons
import { ThemeToggle } from "./ThemeToggle"


export function Navbar() {
    const pathname = usePathname()

    const link = (href: string, label: string) => (
        <Link
            href={href}
            className={clsx(
                "px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition",
                pathname === href && "bg-gray-100 dark:bg-gray-800 font-medium"
            )}
        >
            {label}
        </Link>
    )

    return (
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-200 dark:border-gray-800">
            <div className="container flex items-center justify-between h-16">
                {/* Left side - Name/Logo */}
                <Link href="/" className="text-lg md:text-xl font-semibold">
                    Anand Kumar
                </Link>

                {/* Center - Nav links */}
                <nav className="hidden md:flex items-center gap-1">
                    {link("/", "Home")}
                    {link("/projects", "Projects")}
                    <a
                        className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Résumé
                    </a>
                    {link("/blog", "Blog")}

                    <a className="btn-primary ml-2" href="#contact">
                        Contact
                    </a>
                </nav>

                {/* Right side - Quick Contact Icons */}
                <div className="flex items-center gap-3 ml-4">
                    <a
                        href="mailto:anandk.tech.25@gmail.com"
                        className="hover:text-brand-600"
                        title="Email Anand"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/ANAND9963"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-brand-600"
                        title="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/anandYK"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-brand-600"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}
