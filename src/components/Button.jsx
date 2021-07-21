import React from 'react';
import PropTypes from 'prop-types';

const Squarebtn = ({ buttonName, handlerClick, type }) => {
  const handleClick = () => handlerClick(buttonName);
  let color = '';
  if (type === 'sp') {
    color = 'sp';
  } if (type === 'op') {
    color = 'op';
  } if (type === 'num') {
    color = 'num';
  } if (type === 'zero') {
    color = 'zero';
  }

  return (
    <button type="button" className={`square ${color}`} onClick={handleClick} classbuttonname="square">{buttonName}</button>
  );
};

Squarebtn.propTypes = {
  buttonName: PropTypes.string,
  handlerClick: PropTypes.func.isRequired,
  type: PropTypes.string,

};

Squarebtn.defaultProps = {
  buttonName: '0',
  type: null,
};

export default Squarebtn;
