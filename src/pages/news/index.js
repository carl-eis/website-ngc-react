import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import News from './page';
import newsPageReducer from './page/reducer';

const mapStateToProps = ({
  newsPageReducer: pageReducer, // rename to avoid conflicts
  sharedReducer: { websiteTitle },
  routing,
}) => ({
  ...pageReducer,
  routerReducer: routing,
  websiteTitle,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(News);

export const newsPageReducers = {
  newsPageReducer,
};
