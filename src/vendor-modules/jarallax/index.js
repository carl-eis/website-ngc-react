const jarallax = require('./jarallax.esm').default;
const jarallaxVideo = require('./jarallax-video.esm').default;
const jarallaxElement = require('./jarallax-element.esm').default;

module.exports = {
  jarallax,
  jarallaxElement() {
    return jarallaxElement(jarallax);
  },
  jarallaxVideo() {
    return jarallaxVideo(jarallax);
  },
};
