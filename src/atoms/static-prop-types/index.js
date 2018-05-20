import {
  oneOfType, arrayOf, shape, element,
} from 'prop-types';

export const childrenProps = oneOfType([
  arrayOf(shape()),
  arrayOf(element),
  shape(),
  element,
]);

const allTypes = {
  childrenProps,
};

export default allTypes;
