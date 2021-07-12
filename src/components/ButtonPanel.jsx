import React from 'react';
import Squarebtn from './Button';
import Display from './Display';
import Functions from './Functions';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value2: '',
      symbol: '',
      toNegative: true,
    };
  }

  handleChange(i) {
    this.setState((prevState) => ({ value: prevState.value + i }));
  }

  handleSecondInput(i) {
    this.setState((prevState) => ({ value2: prevState.value }));
    this.setState(() => ({ symbol: i }));
    this.setState({ value: '' });
  }

  handleNegative() {
    const { toNegative } = this.state;
    if (toNegative) {
      this.setState((prevState) => ({ value: `-${prevState.value}`, toNegative: false }));
    } else if (!toNegative) {
      this.setState((prevState) => ({ value: prevState.value.substring(1), toNegative: true }));
    }
  }

  handleAC() {
    this.setState({ value: '' });
  }

  Iqual() {
    const { value, value2, symbol } = this.state;
    const iqual = Functions(value2, value, symbol);
    this.setState({ value: iqual });
  }

  Percentage(i) {
    const { value } = this.state;
    const iqual = Functions(value, 0, i);
    this.setState({ value: iqual });
  }

  renderSquare(i) {
    return (
      <Squarebtn
        value={i}
        onClick={() => this.handleChange(i)}
      />
    );
  }

  renderOperator(i) {
    return (
      <Squarebtn
        value={i}
        onClick={() => this.handleSecondInput(i)}
      />
    );
  }

  renderIqual(i) {
    return (
      <Squarebtn
        value={i}
        onClick={() => this.Iqual()}
      />
    );
  }

  renderPercent(i) {
    return (
      <Squarebtn
        value={i}
        onClick={() => this.Percentage(i)}
      />
    );
  }

  renderNegative(i) {
    return (
      <Squarebtn
        value={i}
        onClick={() => this.handleNegative(i)}
      />
    );
  }

  renderAC(i) {
    return (
      <Squarebtn
        value={i}
        onClick={() => this.handleAC()}
      />
    );
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div className="board-row">
          <Display value={value} />
        </div>

        <div className="board-row">
          {this.renderAC('AC')}
          {this.renderNegative('+/-')}
          {this.renderPercent('%')}
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
