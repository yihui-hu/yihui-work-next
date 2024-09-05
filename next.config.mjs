/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yihui-work.s3.us-east-2.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lastfm.freetls.fastly.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
      }
    ],
  },
};

export default nextConfig;
