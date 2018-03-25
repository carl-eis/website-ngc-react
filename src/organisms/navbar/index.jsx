import React from 'react';
import { string } from 'prop-types';

import NavbarLink from './navbar-link';

import {
  NavbarContainer,
  NavbarContent,
  NavbarPullLeft,
  NavbarPullRight,
  NavbarTitleContainer,
} from './styles';

const Navbar = ({ title }) => (
  <NavbarContainer data-qa="navbar-container">
    <div className="container fullheight">
      <NavbarContent data-qa="navbar-content">
        <NavbarPullLeft data-qa="navbar-pull">
          <NavbarTitleContainer>
            {title}
          </NavbarTitleContainer>
          <NavbarLink
            title="Home"
            subtitle="start here"
          />
          <NavbarLink
            title="News"
            subtitle="blog"
          />
          <NavbarLink
            title="Events"
            subtitle="Calendar"
          />
          <NavbarLink
            title="Forum"
            subtitle="Discussions"
            showCaret={false}
          />
        </NavbarPullLeft>
        <NavbarPullRight data-qa="navbar-pull">
          <NavbarLink />
        </NavbarPullRight>
      </NavbarContent>
    </div>
  </NavbarContainer>
);

Navbar.propTypes = {
  title: string,
};

Navbar.defaultProps = {
  title: 'Site Title',
};

export default Navbar;
