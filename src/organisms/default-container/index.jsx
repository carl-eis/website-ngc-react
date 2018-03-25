import React from 'react';
import { element, arrayOf } from 'prop-types';
import { ResponsiveContainer } from '../styles';

const DefaultContainer = ({ children }) => (
  <ResponsiveContainer>
    {children}
  </ResponsiveContainer>
);

DefaultContainer.propTypes = {
  children: arrayOf([element]),
};

DefaultContainer.defaultProps = {
  children: undefined,
};

export default DefaultContainer;
