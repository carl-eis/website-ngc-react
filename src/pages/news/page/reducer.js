/* Import node modules as required (see what I did there?) */

/* Import actions */
import {
  DEFAULT_ACTION,
} from './actions';

/* Import helpers */

/* Set the initial state */
const initialState = {

};

/* Create and export the reducer function */
const newsPageReducer = (state = initialState, action) => {
  const { data, type } = action; // eslint-disable-line
  switch (type) {
    /* Page Actions */
    case DEFAULT_ACTION: return { ...state };
    default: return state;
  }
};

export default newsPageReducer;
