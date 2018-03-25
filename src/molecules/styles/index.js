/* eslint import/prefer-default-export: 0 */
import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
  padding-right: 80px;
  position: relative;

  ::after {
    content: "";
    background: url(${props => props.background});
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-size: cover;
    background-position: center center;
  }

  .btn {
    max-width: 300px;
  }

  h1 {
    text-transform: uppercase;
    font-family: Lato, sans-serif;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.03em;
  }
`;
