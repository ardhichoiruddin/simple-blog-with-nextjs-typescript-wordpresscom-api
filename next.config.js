/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname:
    //       process.env.DEV_MODE === "true"
    //         ? process.env.FILES_DOMAIN_DEV
    //         : process.env.FILES_DOMAIN_PROD,
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "miro.medium.com",
    //   },
    // ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: process.env.DOMAIN },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
