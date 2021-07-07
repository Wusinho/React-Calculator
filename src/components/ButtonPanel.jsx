/* eslint-disable indent */
import React from 'react';
import Square from './Square';

const Button = () => (
  <div>
    <div className="board-row">
      <Square value="AC" />
      <Square value="+/-" />
      <Square value="%" />
      <Square value="/" />
    </div>
    <div className="board-row">
      <Square value={7} />
      <Square value={8} />
      <Square value={9} />
      <Square value="X" />
    </div>
    <div className="board-row">
      <Square value={4} />
      <Square value={5} />
      <Square value={6} />
      <Square value="-" />
    </div>
    <div className="board-row">
      <Square value={1} />
      <Square value={2} />
      <Square value={3} />
      <Square value="+" />
    </div>
    <div className="board-row">
      <Square value="" />
      <Square value="." />
      <Square value={0} />
      <Square value="=" />
    </div>
  </div>
);

export default Button;
