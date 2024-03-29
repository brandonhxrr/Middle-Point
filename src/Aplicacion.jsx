import React, { Component } from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./login.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Detalle from "./Detalle.jsx";
import Formulario from "./Formulario.jsx";
import DetalleEditar from "./Detalle-Editar.jsx";
import DetalleProbar from "./Detalle-Probar.jsx";

class Aplicacion extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/MiddlePoint/"}>
                Middle Point
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/MiddlePoint/login"}>
                      Acceder
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/MiddlePoint/about"}>
                      Acerca de
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <br /><br />
          
            <div className="auth-inner" style={{ margin: "5%"}}>
                <Switch>
                  <Route path="/MiddlePoint/login">
                    <Login />
                  </Route>
                  <Route path="/MiddlePoint/about">
                    <About />
                  </Route>
                  <Route path="/MiddlePoint/formulario">
                    <Formulario />
                  </Route>
                  <Route path="/MiddlePoint/detalle">
                    <Detalle />
                  </Route>
                  <Route path="/MiddlePoint/editar">
                    <DetalleEditar />
                  </Route>
                  <Route path="/MiddlePoint/probar">
                    <DetalleProbar />
                  </Route>
                  <Route path="/MiddlePoint/">
                    <Home />
                  </Route>
                  <Route
                    path="*"
                    render={() => <h1>Recurso no encontrado</h1>}
                  />
                </Switch>
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
