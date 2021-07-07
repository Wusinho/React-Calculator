/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Rectangle = (props) => (<button className="rectangle">{props.value}</button>);

Rectangle.propTypes = {
  value: PropTypes.string,
};

Rectangle.defaultProps = {
  value: '0',
};
export default Rectangle;
