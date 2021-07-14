import React from 'react';
import PropTypes from 'prop-types';

const Squarebtn = ({ buttonName, handlerclick, type }) => {
  let color = '';
  if (type === 'sp') {
    color = 'purple';
  } if (type === 'op') {
    color = 'blue';
  }

  return (
    <button type="button" className={`square ${color}`} classbuttonname="square" onClick={handlerclick}>{buttonName}</button>
  );
};

Squarebtn.propTypes = {
  buttonName: PropTypes.string,
  handlerclick: PropTypes.func.isRequired,
  type: PropTypes.string,

};

Squarebtn.defaultProps = {
  buttonName: '0',
  type: null,
};

export default Squarebtn;
