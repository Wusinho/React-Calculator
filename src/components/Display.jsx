/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Rectangle = (props) => (<div className="rectangle">{props.value || '0'}</div>);

Rectangle.propTypes = {
  value: PropTypes.string,
};

Rectangle.defaultProps = {
  value: '0',
};
export default Rectangle;
