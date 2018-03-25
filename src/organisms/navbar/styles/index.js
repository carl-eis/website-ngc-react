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

export const LinkTitle = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  font-family: Lato, sans-serif;
`;

export const LinkSubTitle = styled.div`
  font-weight: 400;
  text-transform: lowercase;
  font-family: Lato, sans-serif;
  white-space: nowrap;
  font-size: 11px;
  color: rgba(255,255,255,.5);
  transition: color 0.3s;
`;

export const NavbarLinkContainer = styled.div`
  cursor: pointer;
  padding: 0 12px 0 12px;
  &:hover ${LinkSubTitle} {
    color: white;
  }
`;
