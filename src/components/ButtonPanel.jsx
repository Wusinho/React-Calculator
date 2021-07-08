/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Square from './Square';
import Rectangle from './Display';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(i) {
    this.setState((prevState) => ({ value: prevState.value + i }));
  }

  renderSquare(i) {
    return (
      <Square
        value={i}
        onClick={() => this.handleChange(i)}
      />
    );
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div className="board-row">
          <Rectangle value={value} />
        </div>

        <div className="board-row">
          {this.renderSquare('AC')}
          {this.renderSquare('+/-')}
          {this.renderSquare('%')}
          {this.renderSquare('/')}
        </div>
        <div className="board-row">
          {this.renderSquare('7')}
          {this.renderSquare('8')}
          {this.renderSquare('9')}
          {this.renderSquare('X')}
        </div>
        <div className="board-row">
          {this.renderSquare('4')}
          {this.renderSquare('5')}
          {this.renderSquare('6')}
          {this.renderSquare('-')}
        </div>
        <div className="board-row">
          {this.renderSquare('1')}
          {this.renderSquare('2')}
          {this.renderSquare('3')}
          {this.renderSquare('+')}
        </div>
        <div className="board-row">
          {this.renderSquare('')}
          {this.renderSquare('.')}
          {this.renderSquare('0')}
          {this.renderSquare('=')}
        </div>
      </div>
    );
  }
}

export default Button;
