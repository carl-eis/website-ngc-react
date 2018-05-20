import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const SkewButton = styled.button`
  cursor: pointer;

  user-select: none;
  transform: skew(-7deg);
  border: 2px solid white;

  transition: .3s background ease, .3s border ease;
  color: white;

  display: inline-block;
  background: rgba(0,0,0,0);
  height: 54px;
  padding: 15px 50px;

  font-size: 18px;
  font-weight: 400;
  line-height: calc(4/3);

  width: auto;
  font-family: Lato, sans-serif;

  &:focus, &:hover {
    background-color: #d92b4c;
    border-color: #d92b4c;
    outline: 0;
  }

  div {
    transform: skew(7deg);
  }
`;

const Button = ({ text }) => (
  <SkewButton>
    <div>{text}</div>
  </SkewButton>
);

Button.propTypes = {
  text: string,
};

Button.defaultProps = {
  text: 'Button Text',
};

export default Button;
