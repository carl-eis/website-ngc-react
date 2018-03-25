import React from 'react';
import { string } from 'prop-types';

import { FeaturedSlider } from '~/molecules';
import { DefaultTemplate } from '~/organisms';

const Home = ({
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
        Page Content
    </div>
  </DefaultTemplate>
);

Home.propTypes = {
  websiteTitle: string,
};

Home.defaultProps = {
  websiteTitle: 'Page title from reducer',
};

export default Home;
