import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="board-row">
    <div className="rectangle">
      <div className="value">{result || 0}</div>
    </div>
  </div>
);
Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
export default Display;
