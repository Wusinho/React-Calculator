import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';

import '../assets/styles/App.scss';

const App = () => (
  <Router>
    <Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </Navbar>
  </Router>
);

export default App;
