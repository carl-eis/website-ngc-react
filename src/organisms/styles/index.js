/* eslint import/prefer-default-export: 0 */
import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  max-width: 1400px;
  flex: 1;
  padding-top: ${props => (props.navbarPadding ? 80 : 0)}px;
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
