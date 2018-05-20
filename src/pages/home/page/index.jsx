import React from 'react';
import { string } from 'prop-types';

import { FeaturedSlider } from '~/molecules';
import { DefaultTemplate } from '~/organisms';
import { MockPageContent } from '~/atoms';

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
