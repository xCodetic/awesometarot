/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/awesometarot",
  assetPrefix: "/awesometarot",
  pwa: {
    dest: "/public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
});
