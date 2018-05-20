import {
  DEFAULT_ACTION,
} from './actions';

const initialState = {

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
