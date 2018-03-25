import React from 'react';
import {
  element, arrayOf, bool,
} from 'prop-types';
import { ResponsiveContainer } from '../styles';

const DefaultContainer = ({ navbarPadding, children }) => (
  <ResponsiveContainer navbarPadding={navbarPadding}>
    {children}
  </ResponsiveContainer>
);

DefaultContainer.propTypes = {
  children: arrayOf([element]),
  navbarPadding: bool,
};

DefaultContainer.defaultProps = {
  children: undefined,
  navbarPadding: false,
};

export default DefaultContainer;
