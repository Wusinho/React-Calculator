import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

import '../assets/styles/App.scss';

const App = () => (
  <Router>
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
