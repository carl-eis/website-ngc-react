import React from 'react';
import { string } from 'prop-types';

import { FeaturedSlider } from '~/molecules';
import { DefaultTemplate } from '~/organisms';

const Home = ({
  pageTitle,
}) => (
  <DefaultTemplate navbar>
    <FeaturedSlider
      backgroundImage="assets/images/banner-bg.jpg"
      />
    <div>
      Page Content
    </div>
  </DefaultTemplate>
);

Home.propTypes = {
  pageTitle: string,
};

Home.defaultProps = {
  pageTitle: 'Page title from reducer',
};

export default Home;
