import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';

import {
  NavbarLinkContainer, LinkTitle, LinkSubTitle,
} from '../styles';

const NavbarLink = ({
  title, subtitle, showCaret, link,
}) => (
  <Link to={link}>
    <NavbarLinkContainer>
      <LinkTitle>
        {title}
        {showCaret &&
          <Fragment>
            &nbsp;&nbsp;&nbsp;
            <FontAwesome name="chevron-down" />
          </Fragment>
        }
      </LinkTitle>
      <LinkSubTitle>
        {subtitle}
      </LinkSubTitle>
    </NavbarLinkContainer>
  </Link>
);

NavbarLink.propTypes = {
  title: string,
  subtitle: string,
  showCaret: bool,
  link: string,
};

NavbarLink.defaultProps = {
  title: 'Link Title',
  subtitle: 'Subtitle',
  showCaret: true,
  link: '/',
};

export default NavbarLink;

