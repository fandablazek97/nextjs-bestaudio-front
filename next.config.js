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
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }

};

module.exports = nextConfig;
