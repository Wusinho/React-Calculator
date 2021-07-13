import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const clickHandle = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <>
      <div className="board-row">
        <Button buttonName="AC" handlerClick={clickHandle} />
        <Button buttonName="+/-" handlerClick={clickHandle} />
        <Button buttonName="%" handlerClick={clickHandle} />
        <Button buttonName="/" handlerClick={clickHandle} />
      </div>
      <div className="board-row">
        <Button buttonName="7" handlerClick={clickHandle} />
        <Button buttonName="8" handlerClick={clickHandle} />
        <Button buttonName="9" handlerClick={clickHandle} />
        <Button buttonName="X" handlerClick={clickHandle} />
      </div>
      <div className="board-row">
        <Button buttonName="4" handlerClick={clickHandle} />
        <Button buttonName="5" handlerClick={clickHandle} />
        <Button buttonName="6" handlerClick={clickHandle} />
        <Button buttonName="-" handlerClick={clickHandle} />
      </div>
      <div className="board-row">
        <Button buttonName="1" handlerClick={clickHandle} />
        <Button buttonName="2" handlerClick={clickHandle} />
        <Button buttonName="3" handlerClick={clickHandle} />
        <Button buttonName="+" handlerClick={clickHandle} />
      </div>
      <div className="board-row">
        <Button buttonName="0" handlerClick={clickHandle} />
        <Button buttonName="." handlerClick={clickHandle} />
        <Button buttonName="=" handlerClick={clickHandle} />
        <Button />
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
