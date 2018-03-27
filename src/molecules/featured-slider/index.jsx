import React, { Component } from 'react';
// import { generate } from 'shortid';
import {
  jarallax,
  jarallaxElement,
  jarallaxVideo,
} from 'jarallax';

import {
  element, string, func,
} from 'prop-types';

import {
  SliderContainer,
  SliderImageContainer,
  SliderContentContainer,
  SliderContent,
} from '../styles';

/* eslint-disable react/prefer-stateless-function */
class FeaturedSlider extends Component {
  componentDidMount() {
    jarallax(document.querySelector('.jarallax-feature-slider'), {
      speed: 0.2,
      disableParallax: /iPad|iPhone|iPod|Android/,
      disableVideo: /iPad|iPhone|iPod|Android/,
    });
  }

  render() {
    const {
      title1,
      title2,
      quote,
      buttonText,
      buttonClick,
      backgroundImage,
      children,
    } = this.props;

    return (
      <SliderContainer>
        <SliderImageContainer data-qa="slider-image-container">
          <div className="jarallax-feature-slider">
            <img src={backgroundImage} className="jarallax-img" alt="" />
          </div>

        </SliderImageContainer>
        <SliderContentContainer data-qa="slider-content-container">
          <div className="container">
            <SliderContent data-qa="slider-content">
              <h1>{title1}</h1>
              <h1>{title2}</h1>
              <p>{quote}</p>
              <button className="btn btn-primary" onClick={buttonClick}>
                {buttonText}
              </button>
              {children}
            </SliderContent>
          </div>
        </SliderContentContainer>
      </SliderContainer>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

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
