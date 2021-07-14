import React from 'react';
import PropTypes from 'prop-types';

const Squarebtn = ({ name, onClick }) => (<button type="button" className="square" onClick={onClick}>{name}</button>);

Squarebtn.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Squarebtn.defaultProps = {
  name: '0',
};

export default Squarebtn;
