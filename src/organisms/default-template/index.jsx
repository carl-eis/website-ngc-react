import React from 'react';
import {
  bool, arrayOf, element,
} from 'prop-types';

import { DefaultContainer, Navbar } from '~/organisms';

import { PageContainer } from '../styles';

const DefaultTemplate = ({
  navbar,
  children,
  ...rest
}) => (
  <PageContainer>
    {navbar && <Navbar {...rest} />}
    <DefaultContainer>
      {children}
    </DefaultContainer>
  </PageContainer>
);

DefaultTemplate.propTypes = {
  children: arrayOf(element),
  navbar: bool,
};

DefaultTemplate.defaultProps = {
  children: undefined,
  navbar: true,
};

export default DefaultTemplate;
