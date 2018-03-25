/* eslint import/prefer-default-export: 0 */
import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  max-width: 1400px;
  flex: 1;
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const NavbarContainer = styled.div`
  background-color: rgba(8,3,37,.4);
  height: 80px;
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
`;

export const NavbarBlackDiv2 = styled.div`
  background-color: rgba(8,3,37,.4);
`;
