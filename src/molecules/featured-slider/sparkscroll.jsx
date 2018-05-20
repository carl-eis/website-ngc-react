import React, { Component } from 'react';
import {
  oneOfType, shape, element, arrayOf,
} from 'prop-types';
import { generate } from 'shortid';

const {
  SparkScroll,
  // SparkProxy,
  // sparkScrollFactory,
} = require('react-spark-scroll-rekapi')({
  invalidateAutomatically: true,
});


class SparkScroller extends Component {
  static propTypes = {
    children: oneOfType([
      arrayOf(shape()),
      arrayOf(element),
      shape(),
      element,
    ]),
  }

  static defaultProps = {
    children: undefined,
  }


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
          className={`container fullheight ${this.state.infoId}`}
          style={{ height: '100%' }}
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

export default SparkScroller;
