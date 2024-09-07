import createMDX from '@next/mdx'

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
      },
      {
        protocol: 'https',
        hostname: 'product-design-portfolio.s3.us-east-2.amazonaws.com',
        port: '',
      }
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
