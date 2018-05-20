import {
  DEFAULT_ACTION,
} from './actions';

const initialState = {
  bannerTitle: 'Nova Gaming',
  bannerSubTitle: 'Community',
  bannerQuote: 'By Gamers, For Gamers',
  bannerButtonText: 'Forum',
};

const homePageReducer = (state = initialState, action) => {
  const { /* data, */ type } = action;
  switch (type) {
    /* Page Actions */
    case DEFAULT_ACTION: return { ...state };
    default: return state;
  }
};

export default homePageReducer;
