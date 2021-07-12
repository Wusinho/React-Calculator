/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => (<div className="rectangle">{props.value || '0'}</div>);

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};
export default Display;
