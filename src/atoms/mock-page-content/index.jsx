import React from 'react';
import styled from 'styled-components';
import { StaticPropTypes } from '~/atoms';

const { childrenProps } = StaticPropTypes;

const MockContentContainer = styled.div`
  min-height: 100vh;
`;

const MockPageContent = ({ children }) => (
  <MockContentContainer>
    {children}
  </MockContentContainer>
);

MockPageContent.propTypes = {
  children: childrenProps,
};

MockPageContent.defaultProps = {
  children: undefined,
};

export default MockPageContent;
