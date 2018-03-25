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
  background-color: rgba(0,0,0,.4);
  height: 80px;
  position: fixed;
  z-index: 10;
  width: 100%;

  .fullheight {
    height: 100%;
  }

`;

export const NavbarContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const NavbarPullLeft = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const NavbarPullRight = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const NavbarLink = styled.div`
  padding: 0 8px 0 8px;
`;
