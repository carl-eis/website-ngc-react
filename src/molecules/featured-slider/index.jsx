import React, { Component } from 'react';
import { generate } from 'shortid';
import {
  jarallax,
} from '~/vendor-modules/jarallax';

import {
  element, string, func, number,
} from 'prop-types';

import { Button } from '~/atoms';

import SparkScroller from './sparkscroll';

import {
  SliderContainer,
  SliderContentContainer,
  SliderContent,
  SliderContentFixed,
  ButtonContainer,
} from '../styles';


class FeaturedSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerId: generate(),
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { parallaxSpeed } = this.props;
    console.log('jarallax: ', jarallax);
    jarallax(document.querySelectorAll(`.jarallax-${this.state.bannerId}`), {
      speed: parallaxSpeed,
    });
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
        <SliderContentContainer
          data-qa="slider-content-container"
          background={backgroundImage}
          className={`jarallax-${this.state.bannerId}`}
        />
        <SliderContent data-qa="slider-content">
          <SparkScroller>
            <SliderContentFixed data-qa="slider-content-fixed">
              <h1>{title}</h1>
              <h1>{subtitle}</h1>
              <p>{quote}</p>
              <ButtonContainer>
                <Button text={buttonText} onClick={buttonClick} />
              </ButtonContainer>
              {children}
            </SliderContentFixed>
          </SparkScroller>
        </SliderContent>
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
