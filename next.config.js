/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/awesometarot",
  assetPrefix: "/awesometarot",
};

module.exports = nextConfig
