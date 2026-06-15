/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'none'; style-src 'unsafe-inline'; sandbox",
    remotePatterns: [],
  },
}

export default nextConfig
