import React from 'react';
import {
  arrayOf, bool, node, oneOfType, string,
} from 'prop-types';

import { DefaultContainer, Navbar } from '~/organisms';

import { PageContainer } from '../styles';

const DefaultTemplate = ({
  navbar,
  children,
  title,
}) => (
  <PageContainer>
    {navbar && <Navbar title={title} />}
    <DefaultContainer>
      {children}
    </DefaultContainer>
  </PageContainer>
);

DefaultTemplate.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  navbar: bool,
  title: string,
};

DefaultTemplate.defaultProps = {
  children: undefined,
  navbar: true,
  title: 'Website Title',
};

export default DefaultTemplate;
