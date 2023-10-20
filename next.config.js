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
  },

  // Enable CORS for cookiebot URL
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://consent.cookiebot.com',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
