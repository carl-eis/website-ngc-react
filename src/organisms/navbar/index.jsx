import React from 'react';

import {
  NavbarContainer,
  NavbarContent,
  NavbarPullLeft,
  NavbarPullRight,
  NavbarLink,
} from '../styles';

const Navbar = () => (
  <NavbarContainer data-qa="navbar-container">
    <div className="container fullheight">
      <NavbarContent data-qa="navbar-content">
        <NavbarPullLeft data-qa="navbar-pull">
          <NavbarLink>Test 0</NavbarLink>
        </NavbarPullLeft>
        <NavbarPullRight data-qa="navbar-pull">
          <NavbarLink>Test 1</NavbarLink>
          <NavbarLink>Test 2</NavbarLink>
          <NavbarLink>Test 3</NavbarLink>
          <NavbarLink>Test 4</NavbarLink>
        </NavbarPullRight>
      </NavbarContent>
    </div>
  </NavbarContainer>
);

export default Navbar;
