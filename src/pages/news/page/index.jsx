import React from 'react';
import { string } from 'prop-types';

import { ContentContainer } from '~/atoms';
import { DefaultTemplate } from '~/organisms';

const News = ({
  websiteTitle,
  ...rest
}) => (
  <DefaultTemplate
    navbar
    title={websiteTitle}
    {...rest}
  >
    <ContentContainer>
      <h1>News Page</h1>
    </ContentContainer>
  </DefaultTemplate>
);

News.propTypes = {
  websiteTitle: string,
};

News.defaultProps = {
  websiteTitle: 'Page title from reducer',
};

export default News;
