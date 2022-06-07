import { Button, Container, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Ejercicio from "./Ejercicio.jsx";
import React, { Component } from 'react';

export default class Home extends Component {

    state = {
        data: [],
        showAlert: false,
        alertText: ""
    }

    componentDidMount() {
        axios.get("http://localhost:8080/Middle-Point/Ejercicios").then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.info(error);
            this.setState({ showAlert: true, alertText: "ERROR EN LA OBTENCION DE DATOS" });
        })
    }
 

    render() {
        const { data, showAlert, alertText } = this.state;
        return (
            <Container className="MarginContainer" >
                <h1 className="AlignCenter" > CREAR, ALTAS, BAJAS Y CAMBIOS </h1>
                <hr style={{ width: "80%" }} />
                {
                    showAlert ?
                        <Alert variant="danger">
                            {alertText}
                        </Alert>
                        : null
                }
                <Button variant="info" style={{ margin: "12px" }}>
                    <Link to="/Middle-Point/formulario" className="CustomLink">Añadir nuevo ejercicio</Link>
                </Button>
                <Table striped bordered >
                    <thead>
                        <tr>
                            <th>Ejercicio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(pregunta => {
                                return <Ejercicio {...pregunta} />
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }

}