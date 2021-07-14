import React from 'react';
import PropTypes from 'prop-types';

const Squarebtn = (props) => {
  const { buttonName, type } = props;
  let color = '';
  if (type === 'sp') {
    color = 'purple';
  } if (type === 'op') {
    color = 'blue';
  }

  return (
    <button type="button" className={`square ${color}`} classbuttonname="square">{buttonName}</button>
  );
};

Squarebtn.propTypes = {
  buttonName: PropTypes.string,
  type: PropTypes.string,

};

Squarebtn.defaultProps = {
  buttonName: '0',
  type: null,
};

export default Squarebtn;
