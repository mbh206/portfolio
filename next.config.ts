// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.markh.design'],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
