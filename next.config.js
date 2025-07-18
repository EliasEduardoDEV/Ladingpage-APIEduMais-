
// next.config.js
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, "src"),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};
