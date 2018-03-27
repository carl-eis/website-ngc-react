import styled from 'styled-components';
import { MediaQueries as media } from '~/atoms';

export const NavbarContainer = styled.div`
  background-color: rgba(8, 3, 37, 0.4);
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
  flex: 2;

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

export const NavbarTitleContainer = styled.div`
  display: block;
  height: 80px;
  line-height: 75px;
  font-size: 1.4rem;
  text-transform: lowercase;
  font-family: Lato, sans-serif;
  margin: 0 15px 0 15px;
  white-space: nowrap;
  width: auto;

  ${media.desktop`

  `}

  ${media.tablet`

  `}

  ${media.phone`
      font-size: 1rem;
  `}
`;
