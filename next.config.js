const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
};

module.exports = withContentlayer(nextConfig);
