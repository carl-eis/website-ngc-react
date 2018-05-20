import React, { Fragment } from 'react';
import {
  arrayOf, element, oneOfType, shape, string,
} from 'prop-types';

// WARNING: This component is not complete
// Don't pass a dropdown prop yet

const renderLabel = (label, link) => (
  <div>
    TODO: Implement this column render
    {label}
    {link}
  </div>
);

const renderColumn = value => (value.isArray ?
  value.map(renderLabel) :
  Object.keys(value).map(renderLabel)
);

const Dropdown = ({ dropdown }) => (
  <div data-qa="dropdown-container">
    {dropdown.isArray ?
      <Fragment>
        {dropdown.length > 0 &&
          dropdown[0].isArray ?
          dropdown.map(column =>
            renderColumn(column),
          ) : renderColumn(dropdown)
        }
      </Fragment> : dropdown
    }
  </div>
);

Dropdown.propTypes = {
  dropdown: oneOfType([
    arrayOf(oneOfType([
      shape({
        label: string,
        link: string,
      }),
      arrayOf(shape({
        label: string,
        link: string,
      })),
    ])),
    element,
  ]).isRequired,
};

Dropdown.defaultProps = {
  dropdown: undefined,
};

export default Dropdown;
