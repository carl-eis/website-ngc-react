import React, { Component } from 'react';
import { generate } from 'shortid';
import {
  jarallax,
  jarallaxElement,
  // jarallaxVideo,
} from 'jarallax';

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


    // const infoBox = $(infoId).offset(infoId.height).top;
    // $(window).scroll(() => {
    //   if ((infoBox - $(window).scrollTop()) < 20) {
    //     $(infoId).stop().fadeTo(100, 0);
    //   } else {
    //     $(infoId).stop().fadeTo('fast', 1);
    //   }
    // });
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
          <div className="container">
            <div className={`jarallax-container ${this.state.infoId}`}>
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
            </div>
          </div>
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
