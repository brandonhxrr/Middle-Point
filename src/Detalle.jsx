import { Button, Container, Table, Alert } from "react-bootstrap";
import axios from "axios";
import Vista from "./Vista.jsx";
import React, { Component } from 'react';

export default class Home extends Component {

    state = {
        data: [],
        showAlert: false,
        alertText: ""
    }

    componentDidMount() {
      var query = window.location.search;
      var urlParams = new URLSearchParams(query);
      var pid = urlParams.get('id');

      var type = urlParams.get('type');

        axios.get("/Middle-Point/BuscarEjercicio", {
          params: {
            id: pid
          }
        }).then(response => {
            this.setState({ data: response.data });
            //console.log(data);
        }).catch(error => {
            console.log(error);
            this.setState({ showAlert: true, alertText: "ERROR EN LA OBTENCION DE DATOS" });
        })
    }
 

    render() {
        const { data, showAlert, alertText } = this.state;
        return (
            <Container className="MarginContainer" >
                
                {
                    showAlert ?
                        <Alert variant="danger">
                            {alertText}
                        </Alert>
                        : null
                }

                {
                    type ?
                    data.map(ejercicio => {
                        return <Editar {...ejercicio} />
                    })
                    : data.map(ejercicio => {
                        return <Vista {...ejercicio} />
                    })
                                            
                }
            </Container>
        )
    }

}