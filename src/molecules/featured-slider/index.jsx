import React, { Component } from 'react';
import { generate } from 'shortid';
import {
  jarallax,
  // jarallaxElement,
  // jarallaxVideo,
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

declare var $: any;

/* eslint-disable react/prefer-stateless-function */
class FeaturedSlider extends Component {
  state = {
    id: `default-jarallax-${generate()}`,
    infoId: `default-info-fade-${generate()}`,
  };

  componentWillMount() {
    const uniqueClassId = `jarallax-${generate()}`;
    const infoId = `infobox-${generate()}`;
    this.setState({ id: uniqueClassId, infoId });
  }

  componentDidMount() {
    jarallax(document.querySelector(`.${this.state.id}`), {
      speed: 0.2,
      disableParallax: /iPad|iPhone|iPod|Android/,
      disableVideo: /iPad|iPhone|iPod|Android/,
    });

    const infoId = `.${this.state.infoId}`;

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
          <div className={`container ${this.state.infoId}`}>
            <SliderContent data-qa="slider-content">
              <h1>{title}</h1>
              <h1>{subtitle}</h1>
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
  title: string,
  subtitle: string,
  quote: string,
  buttonText: string,
  buttonClick: func,
  children: element,
  backgroundImage: string,
};

FeaturedSlider.defaultProps = {
  title: 'Site Title',
  subtitle: 'Default Title 2',
  quote: 'Default quote',
  buttonText: 'Click Me',
  buttonClick: () => { },
  children: undefined,
  backgroundImage: '',
};

export default FeaturedSlider;
