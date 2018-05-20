import React from 'react';
import { string } from 'prop-types';

import FeaturedBanner from '~/pages/home/containers/feature-banner';
import { DefaultTemplate } from '~/organisms';
import { MockPageContent } from '~/atoms';

const Home = ({
  websiteTitle,
}) => (
  <DefaultTemplate
    navbar
    title={websiteTitle}
  >
    <FeaturedBanner
      backgroundImage="assets/images/banner-bg.jpg"
    />

    <MockPageContent>
      <div>
          Page Content
      </div>
    </MockPageContent>
  </DefaultTemplate>
);

Home.propTypes = {
  websiteTitle: string,
};

Home.defaultProps = {
  websiteTitle: 'Page title from reducer',
};

export default Home;
