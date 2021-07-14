import React from 'react';
import PropTypes from 'prop-types';

const Squarebtn = ({ buttonName, handlerClick, type }) => {
  const handleClick = () => handlerClick(buttonName);
  let color = '';
  if (type === 'sp') {
    color = 'purple';
  } if (type === 'op') {
    color = 'blue';
  }

  return (
    <button type="button" className={`square ${color}`} classbuttonName="square" handlerClick={handleClick}>{buttonName}</button>
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
