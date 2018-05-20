import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';

const {
  SparkScroll,
  // SparkProxy,
  // sparkScrollFactory,
} = require('react-spark-scroll-rekapi')({
  invalidateAutomatically: true,
});


class SparkScroller extends Component {
  state = {
    infoId: `default-info-fade-${generate()}`,
  };

  componentWillMount() {
    const infoId = `infobox-${generate()}`;
    this.setState({ infoId });
  }

  render() {
    const { children } = this.props;
    if (children) {
      return (
        <SparkScroll.div
          className={`container ${this.state.infoId}`}
          timeline={{
            topTop: { opacity: 1 },
            'topTop+450': { opacity: [0, 'easeOutQuart'] },
          }}
        >
          {children}
        </SparkScroll.div>
      );
    }

    return <div />;
  }
}

SparkScroller.propTypes = {

};

export default SparkScroller;
