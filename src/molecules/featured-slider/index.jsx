import React from 'react';
import {
  element, string, func,
} from 'prop-types';

import { SliderContainer } from '../styles';

const FeaturedSlider = ({
  title1,
  title2,
  quote,
  buttonText,
  buttonClick,
  backgroundImage,
  children,
}) => (
  <SliderContainer
    background={backgroundImage}
  >
    <div className="container">
      <h1>{title1}</h1>
      <h1>{title2}</h1>
      <p>{quote}</p>
      <button className="btn btn-primary" onClick={buttonClick}>
        {buttonText}
      </button>
      {children}
    </div>
  </SliderContainer>
);

FeaturedSlider.propTypes = {
  title1: string,
  title2: string,
  quote: string,
  buttonText: string,
  buttonClick: func,
  children: element,
  backgroundImage: string,
};

FeaturedSlider.defaultProps = {
  title1: 'Default Title 1',
  title2: 'Default Title 2',
  quote: 'Default quote',
  buttonText: 'Click Me',
  buttonClick: () => { },
  children: undefined,
  backgroundImage: '',
};

export default FeaturedSlider;
