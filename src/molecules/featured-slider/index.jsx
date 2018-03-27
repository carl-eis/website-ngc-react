import React, { Component } from 'react';
import { generate } from 'shortid';
import { jarallax } from 'jarallax';

import {
  element, string, func, number,
} from 'prop-types';

import {
  SliderContainer,
  SliderImageContainer,
  SliderContentContainer,
  SliderContent,
  SliderContentFixed,
} from '../styles';

const {
  SparkScroll, SparkProxy, sparkScrollFactory,
}
  = require('react-spark-scroll-rekapi')({
    invalidateAutomatically: true,
  });

/* eslint-disable react/prefer-stateless-function */
class FeaturedSlider extends Component {
  state = {
    id: `default-jarallax-${generate()}`,
    infoId: `default-info-fade-${generate()}`,
  };

  componentWillMount() {
    const id = `jarallax-${generate()}`;
    const infoId = `infobox-${generate()}`;
    this.setState({ id, infoId });
  }

  componentDidMount() {
    const { parallaxSpeed: speed } = this.props;
    jarallax(document.querySelector(`.${this.state.id}`), {
      speed,
      disableParallax: /iPad|iPhone|iPod|Android/,
      disableVideo: /iPad|iPhone|iPod|Android/,
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
      <SliderContainer>
        <SliderImageContainer data-qa="slider-image-container">
          <div className={this.state.id}>
            <img src={backgroundImage} className="jarallax-img" alt="" />
          </div>

        </SliderImageContainer>
        <SliderContentContainer data-qa="slider-content-container">
          <SparkScroll.div
            className={`container ${this.state.infoId}`}
            timeline={{
              topTop: { opacity: 1 },
              'topTop+450': { opacity: [0, 'easeOutQuart'] },
            }}
          >
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
          </SparkScroll.div>
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
