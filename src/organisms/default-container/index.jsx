import React from 'react';
import {
  arrayOf, bool, node, oneOfType,
} from 'prop-types';
import { ResponsiveContainer } from '../styles';

const DefaultContainer = ({ navbarPadding, children }) => (
  <ResponsiveContainer navbarPadding={navbarPadding}>
    {children}
  </ResponsiveContainer>
);

DefaultContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  navbarPadding: bool,
};

DefaultContainer.defaultProps = {
  children: undefined,
  navbarPadding: false,
};

export default DefaultContainer;
