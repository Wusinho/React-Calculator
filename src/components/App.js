import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../assets/styles/App.scss';

const App = () => (

  <>
    <Display value={ButtonPanel.value} />
    <ButtonPanel />
  </>
);

export default App;
