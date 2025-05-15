/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "cdn-icons-png.flaticon.com",
      "upload.wikimedia.org",
      "raw.githubusercontent.com",
      "playwright.dev",
      "github.com"
    ],
  },
}

export default nextConfig
