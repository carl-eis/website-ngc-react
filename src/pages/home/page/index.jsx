import React from 'react';
import { JumbotronMain } from '~/pages/home/molecules';
import { string } from 'prop-types';

const Home = ({
  pageTitle,
}) => (
  <div>
    <JumbotronMain
      title={pageTitle}
    />
  </div>
);

Home.propTypes = {
  pageTitle: string,
};

Home.defaultProps = {
  pageTitle: 'Page title from reducer',
};

export default Home;
