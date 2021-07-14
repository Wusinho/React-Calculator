import React from 'react';
import Button from './Button';

const ButtonPanel = (clickhandle) => (
  <>
    <div className="board-row">
      <Button buttonName="AC" onClick={clickhandle} type="sp" />
      <Button buttonName="+/-" onClick={clickhandle} type="sp" />
      <Button buttonName="%" onClick={clickhandle} type="sp" />
      <Button buttonName="/" onClick={clickhandle} type="op" />
    </div>
    <div className="board-row">
      <Button buttonName="7" onClick={clickhandle} type="num" />
      <Button buttonName="8" onClick={clickhandle} type="num" />
      <Button buttonName="9" onClick={clickhandle} type="num" />
      <Button buttonName="X" onClick={clickhandle} type="op" />
    </div>
    <div className="board-row">
      <Button buttonName="4" onClick={clickhandle} type="num" />
      <Button buttonName="5" onClick={clickhandle} type="num" />
      <Button buttonName="6" onClick={clickhandle} type="num" />
      <Button buttonName="-" onClick={clickhandle} type="op" />
    </div>
    <div className="board-row">
      <Button buttonName="1" onClick={clickhandle} type="num" />
      <Button buttonName="2" onClick={clickhandle} type="num" />
      <Button buttonName="3" onClick={clickhandle} type="num" />
      <Button buttonName="+" onClick={clickhandle} type="op" />
    </div>
    <div className="board-row-last">
      <Button buttonName="0" onClick={clickhandle} type="num" />
      <Button buttonName="." onClick={clickhandle} type="num" />
      <Button buttonName="=" onClick={clickhandle} type="op" />
      <Button buttonName="" onClick={clickhandle} type="" />

    </div>
  </>
);

export default ButtonPanel;
