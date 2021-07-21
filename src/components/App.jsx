import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

import '../assets/styles/App.scss';

const App = () => (
  <Router>
    <Navbar>
      <Switch>
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Navbar>
  </Router>
);

export default App;
