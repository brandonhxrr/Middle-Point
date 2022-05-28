import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './login.jsx';

 
class Aplicacion extends React.Component {
  render() {
    return (
        <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={''}>
                Middle Point
              </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={'/Middle-Point/login'}>
                      Acceder
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route path="/Middle-Point/login">
                  <Login />
                </Route>
                <Route path="/Middle-Point/">
                  <Login />
                </Route>
              </Switch>
            </div>
          </div>
          </div>
        
      </Router>
    );
  }
}
 
export default Aplicacion;

const wrapper = document.getElementById("contenedor");
wrapper ? ReactDOM.render(<Aplicacion/>, wrapper) : false;
console.log(wrapper);