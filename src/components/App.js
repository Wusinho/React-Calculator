import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
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
        <Display result={(next && next.toString()) || (total && total.toString())} />
        <ButtonPanel clickHandler={(e) => handleClick(e)} />
      </div>
    );
  }
}
export default App;
