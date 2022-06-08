import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

const Editar = ({ id, titulo, x1, y1, x2, y2 }) => {
  
    return (
      <form method="GET" action="Guardar">
        <h3>Editar ejercicio</h3><br />
        
        <div className="mb-3" class="labin">
        <label>ID: </label>
          <input
            required
            type="number"
            className="form-control"
            placeholder=""
            name="id"
          /><br />
          <label>Ingresa el primer punto: (</label>
          <input
          required
            type="number"
            className="form-control"
            placeholder="0"
            name="x1"
          />
          <label>,</label>
          <input
            required
            type="number"
            className="form-control"
            placeholder="0"
            name="y1"
          />
          <label>)</label>
        </div>
        <div className="mb-3" class="labin">
          <label>Ingresa el segundo punto: (</label>
          <input
            required
            type="number"
            className="form-control"
            placeholder="0"
            name="x2"
          />
          <label>,</label>
          <input
            required
            type="number"
            className="form-control"
            placeholder="0"
            name="y2"
          />
          <label>)</label>
        </div><br />
        <p>Encontrar: </p>
        
    <div key="inline-radio" className="mb-3">
      <Form.Check
        inline
        checked
        type="radio"
        id="default-radio"
        value="distance"
        label="Distancia entre 2 puntos"
        name="tipo"
      />

    <Form.Check 
        inline
        type="radio"
        value="middle"
        id="default-radio"
        label="Punto medio"
        name="tipo"
      />
    </div>
 
        <br />
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" name="btn">
            Guardar
          </button>
        </div>
      </form>
    )
  }

export default Editar;