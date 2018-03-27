import React, { Fragment } from 'react';
import {
  arrayOf, element, oneOfType, shape, string,
} from 'prop-types';
import FontAwesome from 'react-fontawesome';

import {
  NavbarLinkContainer, LinkTitle, LinkSubTitle,
} from './styles';
import Dropdown from './dropdown';

const Main = ({
  dropdown, subtitle, title,
}) => (
  <NavbarLinkContainer>
    <LinkTitle>
      {title}
      {dropdown &&
        <Fragment>
          &nbsp;&nbsp;&nbsp;
          <FontAwesome name="chevron-down" />
        </Fragment>
      }
    </LinkTitle>
    <LinkSubTitle>
      {subtitle}
    </LinkSubTitle>
    {dropdown && <Dropdown dropdown={dropdown} />}
  </NavbarLinkContainer>
);

Main.propTypes = {
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
  subtitle: string,
  title: string.isRequired,
};

Main.defaultProps = {
  dropdown: undefined,
  subtitle: 'Subtitle',
};

export default Main;
