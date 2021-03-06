/* eslint import/prefer-default-export: 0 */
import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  height: 550px;
  position: relative;
  background: #160962;
`;

export const SliderImageContainer = styled.div`
  position: absolute;
  z-index: -100;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  div {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 0;

    img {
      position: absolute;
      object-fit: cover;
      /* support for plugin https://github.com/bfred-it/object-fit-images */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`;

export const SliderContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const SliderContentContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 550px;
  background-image: url('${props => props.background}');
  opacity: .5;

  .container {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 0;

    & > ${SliderContent} {
      position: absolute;
      object-fit: cover;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`;

export const SliderContentFixed = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 1;
  padding-top: 80px;

  .btn {
    max-width: 300px;
  }

  &> div, p {
    margin: 20px 0;
  }

  h1 {
    text-transform: uppercase;
    font-family: Lato, sans-serif;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.03em;
  }
`;

export const ButtonContainer = styled.div`

`;
