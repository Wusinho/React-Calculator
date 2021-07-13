import React from 'react';
import Squarebtn from './Button';
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

  renderbtn(i) {
    if (i === '+' || i === '-' || i === '*' || i === '/') {
      return (
        <Squarebtn
          name={i}
          onClick={() => this.handleSecondInput(i)}
        />
      );
    } if (i === '%') {
      return (
        <Squarebtn
          name={i}
          onClick={() => this.Percentage(i)}
        />
      );
    } if (i === '=') {
      return (
        <Squarebtn
          name={i}
          onClick={() => this.Iqual()}
        />
      );
    } if (i === '+/-') {
      return (
        <Squarebtn
          name={i}
          onClick={() => this.handleNegative(i)}

        />
      );
    } if (i === 'AC') {
      return (
        <Squarebtn
          name={i}
          onClick={() => this.handleAC()}
        />
      );
    }
    return (
      <Squarebtn
        name={i}
        onClick={() => this.handleChange(i)}
      />
    );
  }

  renderSquare(i) {
    return (
      <Squarebtn
        name={i}
        onClick={() => this.handleChange(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderbtn('AC')}
          {this.renderbtn('+/-')}
          {this.renderbtn('%')}
          {this.renderbtn('/')}
        </div>
        <div className="board-row">
          {this.renderbtn('7')}
          {this.renderbtn('8')}
          {this.renderbtn('9')}
          {this.renderbtn('X')}
        </div>
        <div className="board-row">
          {this.renderbtn('4')}
          {this.renderbtn('5')}
          {this.renderbtn('6')}
          {this.renderbtn('-')}
        </div>
        <div className="board-row">
          {this.renderbtn('1')}
          {this.renderbtn('2')}
          {this.renderbtn('3')}
          {this.renderbtn('+')}
        </div>
        <div className="board-row">
          {this.renderbtn('')}
          {this.renderbtn('.')}
          {this.renderbtn('0')}
          {this.renderbtn('=')}
        </div>
      </div>
    );
  }
}

function value() {
  const getValue = new Button();
  return (getValue.state.value);
}

export { Button, value };
