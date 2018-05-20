import React from 'react';
import styled from 'styled-components';
import { childrenProps } from '~/atoms/static-prop-types';

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
