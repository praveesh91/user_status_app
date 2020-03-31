import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Cards from './Components/Cards'
import Home from './Components/Home'
import Calendar from './Components/Calendar'

import { Container } from 'reactstrap';

function App() {
  return (
      <div className="App">
        <Router>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"><Link to="/">Full Throttle Labs</Link></a>
              </div>
            </div>
          </nav>
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users" component={Cards} />
              <Route exact path="/activities" component={Calendar} />
            </Switch>
          </Router>

      </div>
  );
}

export default App;
