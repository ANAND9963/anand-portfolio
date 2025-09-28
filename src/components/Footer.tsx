export function Footer() {
    return (
        <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
            <div className="container py-8 text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Anand Kumar · Built with Next.js & Tailwind
            </div>
        </footer>
    )
}