const withSass = require('sass')
module.exports = {
  /* config options here */
};
const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    return config
  }
})