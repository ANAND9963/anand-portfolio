import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
    title: "Anand Kumar – Software Engineer",
    description:
        "Portfolio of Anand Kumar – Software Engineer | AI & Cloud Enthusiast",
    icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <div className="min-h-dvh flex flex-col">
            {/* ✅ Navbar will always show */}
            <Navbar />

            {/* Page content */}
            <main className="flex-1">{children}</main>

            {/* ✅ Footer will always show */}
            <Footer />
        </div>
        </body>
        </html>
    )
}
