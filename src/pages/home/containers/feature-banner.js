import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FeaturedSlider } from '~/molecules';

const mapStateToProps = ({
  homePageReducer: {
    bannerTitle: title,
    bannerSubTitle: subtitle,
    bannerQuote: quote,
    bannerButtonText: buttonText,
  },
}) => ({
  title,
  subtitle,
  quote,
  buttonText,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(FeaturedSlider);
