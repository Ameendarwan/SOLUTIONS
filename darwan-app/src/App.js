import React,{Fragment,Component} from 'react';
import './App.css';
import Login from "./Login/login"
import Dashboard from "./Login/Dashboard"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  render() {
    return (<Fragment>
       <Router>
      <div>
        <Switch>
          
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

        </Switch>
      </div>
    </Router>
    </Fragment>
    )
  }
}

export default App;
