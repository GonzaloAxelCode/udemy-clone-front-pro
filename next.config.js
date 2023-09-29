const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "shared/styles")],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
