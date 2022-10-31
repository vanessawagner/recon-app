import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Recons from './Recons'
import Navigation from './Navigation'
import ReconForm from './ReconForm'
import Recon from './Recon'
import './App.css';

const App = () =>{
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          
          <Route exact path="/recons" component={Recons} />

          <Route exact path="/recons/new" component={ReconForm} />

          <Route path="/recons/:id" component={Recon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
