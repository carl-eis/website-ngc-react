import React, { Fragment } from 'react';
import { string, bool } from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';

import {
  NavbarLinkContainer, LinkTitle, LinkSubTitle,
} from '../styles';

const NavbarLink = ({
  title, subtitle, showCaret,
}) => (
  <NavbarLinkContainer>
    <LinkTitle>
      {title}
      {showCaret && (
        <Fragment>
            &nbsp;&nbsp;&nbsp;
          <FontAwesome name="chevron-down" />
        </Fragment>
      )}
    </LinkTitle>
    <LinkSubTitle>{subtitle}</LinkSubTitle>
  </NavbarLinkContainer>
);

NavbarLink.propTypes = {
  title: string,
  subtitle: string,
  showCaret: bool,
};

NavbarLink.defaultProps = {
  title: 'Link Title',
  subtitle: 'Subtitle',
  showCaret: true,
};

export default NavbarLink;

