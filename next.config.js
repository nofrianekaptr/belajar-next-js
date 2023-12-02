/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "rianapi.local"
            }
        ]
    }
}

module.exports = nextConfig
