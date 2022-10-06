import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Editar = ({ id, x1, y1, x2, y2, r1, r2 }) => {
  
    return (
      <form method="GET" action="Actualizar">
        <h3>Editar ejercicio</h3><br />
        
        <div className="mb-3" class="labin">
        <label>ID: </label>
          <input
            type="number"
            className="form-control"
            placeholder=""
            name="id"
            defaultValue={id}
            readonly="readonly"
          /><br />
          <label>Ingresa el primer punto: (</label>
          <input
          required
            type="number"
            step="0.05"
            className="form-control"
            placeholder="0"
            name="x1"
            defaultValue={x1}
          />
          <label>,</label>
          <input
            required
            step="0.05"
            type="number"
            className="form-control"
            placeholder="0"
            name="y1"
            defaultValue={y1}
          />
          <label>)</label>
        </div>
        <div className="mb-3" class="labin">
          <label>Ingresa el segundo punto: (</label>
          <input
            required
            step="0.05"
            type="number"
            className="form-control"
            placeholder="0"
            name="x2"
            defaultValue={x2}
          />
          <label>,</label>
          <input
            required
            step="0.05"
            type="number"
            className="form-control"
            placeholder="0"
            name="y2"
            defaultValue={y2}
          />
          <label>)</label>
        </div><br />
        <p>Encontrar: </p>
        
    <div key="inline-radio" className="mb-3">
      <Form.Check
        inline
        id="rdistance"
        type="radio"
        value="distance"
        label="Distancia entre 2 puntos"
        name="tipo"
        checked={r1}
      />

    <Form.Check 
        inline
        id="rmiddle"
        type="radio"
        value="middle"
        label="Punto medio"
        name="tipo"
        checked={r2}
      />
    </div>
 
        <br />
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" name="btn">
            Actualizar
          </button>
        </div>
        
      </form>

    )
  }

export default Editar;