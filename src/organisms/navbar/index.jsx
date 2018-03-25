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
            title="Test 1"
          />
        </NavbarPullLeft>
        <NavbarPullRight data-qa="navbar-pull">
          <NavbarLink
            title="Test 1"
          />
          <NavbarLink
            title="Test 2"
          />
          <NavbarLink
            title="Test 3"
          />
          <NavbarLink
            title="Test 4"
          />
        </NavbarPullRight>
      </NavbarContent>
    </div>
  </NavbarContainer>
);

export default Navbar;
