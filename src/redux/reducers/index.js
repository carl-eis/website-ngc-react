import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sharedReducer from '~/redux/reducers/shared-reducer';
import { homePageReducers } from '~/pages/home';
import { newsPageReducers } from '~/pages/news';

export default combineReducers({
  routing: routerReducer,
  sharedReducer,
  ...homePageReducers,
  ...newsPageReducers,
});
