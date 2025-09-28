// tailwind.config.ts
import type { Config } from 'tailwindcss'


export default {
    darkMode: "class",
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eef3ff',
                    100: '#dbe6ff',
                    200: '#b8caff',
                    300: '#90abff',
                    400: '#6d8cff',
                    500: '#4668ff',
                    600: '#2f4df0',
                    700: '#263ecc',
                    800: '#2136a3',
                    900: '#1e3184'
                }
            }
        }
    },
    plugins: [require("@tailwindcss/typography")],
} satisfies Config