const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["disease.sh"],
  },
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
  }
});
