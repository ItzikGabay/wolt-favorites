/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData: '@import "styles/main.scss";'
  }
}

module.exports = nextConfig
