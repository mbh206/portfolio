import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.markh.design',
        // If you want to allow all subpaths, you can add `pathname: '/**'`
        // pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
