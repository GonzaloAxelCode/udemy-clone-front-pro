const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "shared/styles")],
  },
};

module.exports = nextConfig;
