import React, { Fragment } from 'react';
import {
  arrayOf, element, oneOfType, shape, string,
} from 'prop-types';

const renderColumn = arr =>
  arr.map(({ label, link }) => (
    <div>
      TODO: Implement this column render
      {label}
      {link}
    </div>
  ));

const Dropdown = ({ dropdown }) => (
  dropdown.isArray ?
    <Fragment>
      {dropdown.length > 0 &&
        <div data-qa="dropdown-container">
          {dropdown[0].isArray ?
            dropdown.map(column =>
              renderColumn(column),
            ) : renderColumn(dropdown)
          }
        </div>
      }
    </Fragment> : dropdown
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

export default Dropdown;
