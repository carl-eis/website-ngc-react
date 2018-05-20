const jarallax = require('./jarallax.esm').default;
const jarallaxElement = require('./jarallax-element.esm').default;

module.exports = {
  jarallax,
  jarallaxElement() {
    return jarallaxElement(jarallax);
  },
};
