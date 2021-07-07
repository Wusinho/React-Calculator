/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => { return (<button className="square">{props.value}</button>) };

Square.propTypes = {
    value: PropTypes.string,
};

Square.defaultProps = {
    value: '0',
};

export default Square;
