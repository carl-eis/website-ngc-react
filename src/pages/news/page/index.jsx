import React from 'react';
import { string } from 'prop-types';

import { FeaturedSlider } from '~/molecules';
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
    <FeaturedSlider
      backgroundImage="assets/images/banner-bg.jpg"
    />
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
