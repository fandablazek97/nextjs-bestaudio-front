/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Change output folder structure for static export: https://nextjs.org/docs/api-reference/next.config.js/trailing-slash
  trailingSlash: true,
  images: {
    domains:[
      "bestaudio-bucket.s3.eu-west-2.amazonaws.com"
    ]
  }
};

module.exports = nextConfig;
