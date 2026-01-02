/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/Paws-Telegram-Mini-App-Clone',
  assetPrefix: '/Paws-Telegram-Mini-App-Clone/',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
}

export default nextConfig
