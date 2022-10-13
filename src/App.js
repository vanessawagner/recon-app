import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Recons from './Recons'
import Navigation from './Navigation'
import ReconForm from './ReconForm'
import './App.css';

const App = () =>{
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route exact path="/recons" >
            <Recons />
          </Route>
          <Route exact path="/recons/new" >
            <ReconForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
