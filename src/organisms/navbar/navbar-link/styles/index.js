import styled from 'styled-components';

export const LinkTitle = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  font-family: Lato, sans-serif;
  white-space: nowrap;
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
  height: 80px;
  cursor: pointer;
  padding: 24.24242px 12px;
  &:hover ${LinkSubTitle} {
    color: white;
  }
`;
