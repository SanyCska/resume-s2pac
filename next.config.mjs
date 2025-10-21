/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/resume-s2pac' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume-s2pac' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
