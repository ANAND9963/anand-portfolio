// next.config.ts
import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "leetcard.jacoblin.cool", // your external image domain
            },
        ],
    },
}

module.exports = nextConfig


export default nextConfig
