import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.vimeocdn.com',
      },
    ],
  },
  // Sessions and booths are hidden (not deleted) while the holding page is live.
  async redirects() {
    return [
      { source: '/sessions/:path*', destination: '/', permanent: false },
      { source: '/booths/:path*', destination: '/', permanent: false },
    ];
  },
  // The partners and associations pages are static HTML files synced into
  // public/<route>/ from gilpages/career-launch-industry-partner (see the
  // sync-partners workflow).
  async rewrites() {
    return [
      { source: '/partners', destination: '/partners/index.html' },
      { source: '/associations', destination: '/associations/index.html' },
    ];
  },
};

export default nextConfig;
