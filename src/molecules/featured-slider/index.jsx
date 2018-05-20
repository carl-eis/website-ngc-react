import React, { Component } from 'react';

import {
  element, string, func, number,
} from 'prop-types';

import SparkScroller from './sparkscroll';

import {
  SliderContainer,
  SliderContentContainer,
  SliderContent,
  SliderContentFixed,
} from '../styles';


class FeaturedSlider extends Component {
  state = {};

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    const {
      title,
      subtitle,
      quote,
      buttonText,
      buttonClick,
      backgroundImage,
      children,
    } = this.props;

    return (
      <SliderContainer data-qa="slider-container">
        <SliderContentContainer data-qa="slider-content-container">
          <SparkScroller>
            <SliderContent data-qa="slider-content">
              <SliderContentFixed>
                <h1>{title}</h1>
                <h1>{subtitle}</h1>
                <p>{quote}</p>
                <button className="btn btn-primary" onClick={buttonClick}>
                  {buttonText}
                </button>
                {children}
              </SliderContentFixed>
            </SliderContent>
          </SparkScroller>
        </SliderContentContainer>
      </SliderContainer>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

FeaturedSlider.propTypes = {
  title: string,
  subtitle: string,
  quote: string,
  buttonText: string,
  buttonClick: func,
  children: element,
  backgroundImage: string,
  parallaxSpeed: number,
};

FeaturedSlider.defaultProps = {
  title: 'Site Title',
  subtitle: 'Default Title 2',
  quote: 'Default quote',
  buttonText: 'Click Me',
  buttonClick: () => { },
  children: undefined,
  backgroundImage: '',
  parallaxSpeed: 0.2,
};

export default FeaturedSlider;
