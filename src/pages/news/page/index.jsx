import React from 'react';
import { string } from 'prop-types';

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
    <div>
      <h1>News Page</h1>
    </div>
  </DefaultTemplate>
);

News.propTypes = {
  websiteTitle: string,
};

News.defaultProps = {
  websiteTitle: 'Page title from reducer',
};

export default News;
