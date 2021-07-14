import React from 'react';
import PropTypes from 'prop-types';

const Squarebtn = ({ buttonName, handlerClick }) => (<button type="button" classbuttonName="square" handlerClick={handlerClick}>{buttonName}</button>);

Squarebtn.propTypes = {
  buttonName: PropTypes.string,
  handlerClick: PropTypes.func.isRequired,
};

Squarebtn.defaultProps = {
  buttonName: '0',
};

export default Squarebtn;
