/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Squarebtn = (props) => (<button type="button" className="square" onClick={props.onClick}>{props.value}</button>);

Squarebtn.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Squarebtn.defaultProps = {
  value: '0',
};

export default Squarebtn;
