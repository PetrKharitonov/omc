/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "wpnexttest.local",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.externals.push({
      ymaps: "ymaps",
    });

    return config;
  },
};

module.exports = nextConfig;
