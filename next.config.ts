import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/loginpage',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;