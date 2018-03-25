import styled from 'styled-components';

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

export const NavbarLinkContainer = styled.div`
  cursor: pointer;
  padding: 0 12px 0 12px;
`;
