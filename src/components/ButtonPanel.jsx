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
        <Button buttonName="AC" handlerClick={clickHandle} type="sp" />
        <Button buttonName="+/-" handlerClick={clickHandle} type="sp" />
        <Button buttonName="%" handlerClick={clickHandle} type="sp" />
        <Button buttonName="/" handlerClick={clickHandle} type="op" />
      </div>
      <div className="board-row">
        <Button buttonName="7" handlerClick={clickHandle} type="num" />
        <Button buttonName="8" handlerClick={clickHandle} type="num" />
        <Button buttonName="9" handlerClick={clickHandle} type="num" />
        <Button buttonName="X" handlerClick={clickHandle} type="op" />
      </div>
      <div className="board-row">
        <Button buttonName="4" handlerClick={clickHandle} type="num" />
        <Button buttonName="5" handlerClick={clickHandle} type="num" />
        <Button buttonName="6" handlerClick={clickHandle} type="num" />
        <Button buttonName="-" handlerClick={clickHandle} type="op" />
      </div>
      <div className="board-row">
        <Button buttonName="1" handlerClick={clickHandle} type="num" />
        <Button buttonName="2" handlerClick={clickHandle} type="num" />
        <Button buttonName="3" handlerClick={clickHandle} type="num" />
        <Button buttonName="+" handlerClick={clickHandle} type="op" />
      </div>
      <div className="board-row-last">
        <Button buttonName="0" handlerClick={clickHandle} type="zero" />
        <Button buttonName="." handlerClick={clickHandle} type="num" />
        <Button buttonName="=" handlerClick={clickHandle} type="op" />
      </div>
    </>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
