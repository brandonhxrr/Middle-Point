import { Button, Container, Table, Alert } from "react-bootstrap";
import axios from "axios";
import Probar from "./Probar.jsx";
import ProbarMedio from "./ProbarMedio.jsx";
import React, { Component } from 'react';

export default class DetalleProbar extends Component {

    state = {
        data: [],
        showAlert: false,
        alertText: ""
    }

    componentDidMount() {
      var query = window.location.search;
      var urlParams = new URLSearchParams(query);
      var pid = urlParams.get('id');

        axios.get("/Middle-Point/BuscarEjercicio", {
          params: {
            id: pid
          }
        }).then(response => {
            this.setState({ data: response.data });
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
                    
                    data.map(ejercicio => {
                        console.log(ejercicio);
                        if(ejercicio.tipo === "distance"){

                        return <Probar {...ejercicio} />
                    }else{
                        return <ProbarMedio {...ejercicio} />
                    }
                    }) 
                                            
                }
            </Container>
        )
    }

}