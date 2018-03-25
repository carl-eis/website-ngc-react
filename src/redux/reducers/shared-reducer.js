/* Import node modules as required (see what I did there?) */

/* Import actions */

/* Import helpers */

/* Set the initial state */
const initialState = {
  websiteTitle: 'nova gaming',
};

/* Create and export the reducer function */
const sharedReducer = (state = initialState, action) => {
  const { data, type } = action; // eslint-disable-line
  switch (type) {
    /* Page Actions */
    case 'DEFAULT_ACTION': return { ...state };
    default: return state;
  }
};

export default sharedReducer;
