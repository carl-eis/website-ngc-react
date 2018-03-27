import React from 'react';
import styled from 'styled-components';

const MockContentContainer = styled.div`
  min-height: 100vh;
`;

const MockPageContent = ({ children }) => (
  <MockContentContainer>
    {children}
  </MockContentContainer>
);

export default MockPageContent;
