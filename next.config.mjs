/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cos.codefe.top",
      },
    ],
  },
}

export default nextConfig
