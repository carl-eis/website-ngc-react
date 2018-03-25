import { css } from 'styled-components';

// these sizes are arbitrary and you can set them to whatever you wish

const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 480,
};

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  // eslint-disable-next-line
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;
