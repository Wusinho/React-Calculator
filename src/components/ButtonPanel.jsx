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
      value2: '',
      simbol: '',
    };
  }

  handleChange(i) {
    this.setState((prevState) => ({ value: prevState.value + i }));
  }

  handleSecondInput(i) {
    this.setState((prevState) => ({ value2: prevState.value }));
    this.setState({ simbol: i });
    this.setState({ value: '' });
  }

  Iqual() {
    // const a = parseInt(this.state.value2,10);
    // const b = parseInt(this.state.value,10);
    // const total = a + b;
    // console.log(total);
  }

  renderSquare(i) {
    return (
      <Square
        value={i}
        onClick={() => this.handleChange(i)}
      />
    );
  }

  renderOperator(i) {
    return (
      <Square
        value={i}
        onClick={() => this.handleSecondInput()}
      />
    );
  }

  renderIqual(i) {
    return (
      <Square
        value={i}
        onClick={() => this.Iqual()}
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
          {this.renderOperator('/')}
        </div>
        <div className="board-row">
          {this.renderSquare('7')}
          {this.renderSquare('8')}
          {this.renderSquare('9')}
          {this.renderOperator('X')}
        </div>
        <div className="board-row">
          {this.renderSquare('4')}
          {this.renderSquare('5')}
          {this.renderSquare('6')}
          {this.renderOperator('-')}
        </div>
        <div className="board-row">
          {this.renderSquare('1')}
          {this.renderSquare('2')}
          {this.renderSquare('3')}
          {this.renderOperator('+')}
        </div>
        <div className="board-row">
          {this.renderSquare('')}
          {this.renderSquare('.')}
          {this.renderSquare('0')}
          {this.renderIqual('=')}
        </div>
      </div>
    );
  }
}

export default Button;
