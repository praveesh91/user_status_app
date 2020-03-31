import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Cards from './Components/Cards/Cards'
import Home from './Components/Home/Home'
import Calendar from './Components/Calendar/Calendar'

function App() {
  return (
      <div className="App">
        <Router>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/">Full Throttle Labs</Link>
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
