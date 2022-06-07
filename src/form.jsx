import React, { Component } from 'react'
export default class Formulario extends Component {
  render() {
    return (
      <form method="GET" action="Guardar">
        <h3>Agregar ejercicio</h3>
        <div className="mb-3">
          <label>Ingresa el primer punto: (</label>
          <input
            type="text"
            className="form-control"
            placeholder="0"
            name="x1"
          />
          <label>,</label>
          <input
            type="text"
            className="form-control"
            placeholder="0"
            name="y1"
          />
          <label>)</label>
        </div>
        <div className="mb-3">
          <label>Ingresa el segundo punto: (</label>
          <input
            type="text"
            className="form-control"
            placeholder="0"
            name="x2"
          />
          <label>,</label>
          <input
            type="text"
            className="form-control"
            placeholder="0"
            name="y2"
          />
          <label>)</label>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" name="btn">
            Guardar
          </button>
        </div>
      </form>
    )
  }
}