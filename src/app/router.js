import React, { Fragment } from 'react';
import { Route /* , Link */ } from 'react-router-dom';

import Home from '~/pages/home';
import News from '~/pages/news';

const Router = () => (
  <Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/news" component={News} />
  </Fragment>
);

export default Router;

/*
  How to use router links in your templates;

  <Link to="/">Home</Link>
  <Link to="/about-us">About</Link>
*/
