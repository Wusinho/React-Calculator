import React from 'react';
import PropTypes from 'prop-types';

const Squarebtn = ({ handlerClick, buttonName }) => {
  const handleClick = () => handlerClick(buttonName);

  return (
    <button type="button" className="square" onClick={handleClick}>{buttonName}</button>
  );
};

Squarebtn.propTypes = {
  buttonName: PropTypes.string,
  handlerClick: PropTypes.func.isRequired,
};

Squarebtn.defaultProps = {
  buttonName: null,
};

export default Squarebtn;
