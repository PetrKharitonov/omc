/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.anoomc.ru",
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
