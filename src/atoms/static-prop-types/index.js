import {
  oneOfType, arrayOf, shape, element,
} from 'prop-types';

export default {
  childrenProps: oneOfType([
    arrayOf(shape()),
    arrayOf(element),
    shape(),
    element,
  ]),
};
