"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react" // icons

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    // Load saved theme
    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null
        if (saved) {
            setTheme(saved)
            document.documentElement.classList.toggle("dark", saved === "dark")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            className="ml-3 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-800" />
            ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
            )}
        </button>
    )
}
