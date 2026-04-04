/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'none'; style-src 'unsafe-inline'; sandbox",
    remotePatterns: [
      { hostname: "cdn-icons-png.flaticon.com" },
      { hostname: "cdn.simpleicons.org" },
      { hostname: "a0.awsstatic.com" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "raw.githubusercontent.com" },
      { hostname: "playwright.dev" },
      { hostname: "github.com" },
    ],
  },
}

export default nextConfig
