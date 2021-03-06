import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '~/pages/home/page';

const mapStateToProps = ({
  homePageReducer,
  sharedReducer: { websiteTitle },
  routing,
}) => ({
  ...homePageReducer,
  routerReducer: routing,
  websiteTitle,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
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
)(Home);
