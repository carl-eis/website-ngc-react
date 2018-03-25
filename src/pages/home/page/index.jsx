import React from 'react';
import { string, shape } from 'prop-types';

import { FeaturedSlider } from '~/molecules';
import { DefaultTemplate } from '~/organisms';

const Home = ({
  shared: { websiteTitle },
  ...rest
}) => (
  <DefaultTemplate navbar title={websiteTitle} {...rest}>
    <FeaturedSlider
      backgroundImage="assets/images/banner-bg.jpg"
    />
    <div>
        Page Content
    </div>
  </DefaultTemplate>
);

Home.propTypes = {
  shared: shape({ websiteTitle: string }),
  websiteTitle: string,
};

Home.defaultProps = {
  shared: {},
  websiteTitle: 'Page title from reducer',
};

export default Home;
