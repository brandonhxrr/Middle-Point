import React, { Component } from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./login.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Detalle from "./Detalle.jsx";
import Formulario from "./Formulario.jsx";
import Editar from "./Editar.jsx";

class Aplicacion extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/Middle-Point/"}>
                Middle Point
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Middle-Point/login"}>
                      Acceder
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/Middle-Point/about"}>
                      Acerca de
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
                  <Route path="/Middle-Point/about">
                    <About />
                  </Route>
                  <Route path="/Middle-Point/formulario">
                    <Formulario />
                  </Route>
                  <Route path="/Middle-Point/detalle">
                    <Detalle />
                  </Route>
                  <Route path="/Middle-Point/editar">
                    <Editar />
                  </Route>
                  <Route path="/Middle-Point/">
                    <Home />
                  </Route>
                  <Route
                    path="*"
                    render={() => <h1>Recurso no encontrado</h1>}
                  />
                </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Aplicacion;

const wrapper = document.getElementById("contenedor");
wrapper ? ReactDOM.render(<Aplicacion />, wrapper) : false;
console.log(wrapper);
