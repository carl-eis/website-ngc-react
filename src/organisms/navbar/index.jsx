import React from 'react';

import NavbarLink from './navbar-link';

import {
  NavbarContainer,
  NavbarContent,
  NavbarPullLeft,
  NavbarPullRight,
} from './styles';

const Navbar = () => (
  <NavbarContainer data-qa="navbar-container">
    <div className="container fullheight">
      <NavbarContent data-qa="navbar-content">
        <NavbarPullLeft data-qa="navbar-pull">
          <NavbarLink
            title="Home"
            subtitle="start here"
          />
        </NavbarPullLeft>
        <NavbarPullRight data-qa="navbar-pull">
          <NavbarLink />
          <NavbarLink />
          <NavbarLink />
          <NavbarLink />
        </NavbarPullRight>
      </NavbarContent>
    </div>
  </NavbarContainer>
);

export default Navbar;
