import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form method="GET" action="Login">
        <h3>Iniciar sesión</h3>
        <div className="mb-3">
          <label>Usuario</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu usuario"
            name="user"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" name="btn">
            Acceder
          </button>
        </div>
      </form>
    )
  }
}