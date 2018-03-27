import React from 'react';
import { Link } from 'react-router-dom';
import {
  arrayOf, element, oneOfType, shape, string,
} from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';

import Main from './main';

const NavbarLink = ({ link, ...rest }) => (link ?
  <Link to={link}>
    <Main {...rest} />
  </Link> : <Main {...rest} />
);

NavbarLink.propTypes = {
  dropdown: oneOfType([
    arrayOf(oneOfType([
      shape({
        label: string,
        link: string,
      }),
      arrayOf(shape({
        label: string,
        link: string,
      })),
    ])),
    element,
  ]),
  link: string,
  subtitle: string,
  title: string.isRequired,
};

NavbarLink.defaultProps = {
  dropdown: undefined,
  link: undefined,
  subtitle: undefined,
};

export default NavbarLink;

