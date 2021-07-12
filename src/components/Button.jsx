/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Squarebtn = (props) => (<button className="square" onClick={props.onClick}>{props.value}</button>);

Squarebtn.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Squarebtn.defaultProps = {
  value: '0',
};

export default Squarebtn;
