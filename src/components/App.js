import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
// import calculate from '../logic/calculate';
import '../assets/styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      point: false,
      isNegative: false,
    };
  }

  render() {
    const handleClick = (buttonName) => {
      const result = calculate(this.state, buttonName);
      this.setState({ ...result });
    };
    const { next, total } = this.state;
    return (
      <div>
        <Display result={(next || total)} />
        <ButtonPanel clickHandler={(e) => handleClick(e)} />
      </div>
    );
  }
}

export default App;
