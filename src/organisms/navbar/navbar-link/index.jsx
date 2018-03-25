import React from 'react';
import { string } from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';

import {
  NavbarLinkContainer, LinkTitle, LinkSubTitle,
} from '../styles';

const NavbarLink = ({ title, subtitle }) => (
  <NavbarLinkContainer>
    <LinkTitle>
      {title}&nbsp;&nbsp;&nbsp;
      <FontAwesome name="chevron-down" />
    </LinkTitle>
    <LinkSubTitle>{subtitle}</LinkSubTitle>
  </NavbarLinkContainer>
);

NavbarLink.propTypes = {
  title: string,
  subtitle: string,
};

NavbarLink.defaultProps = {
  title: 'Link Title',
  subtitle: 'Subtitle',
};

export default NavbarLink;

