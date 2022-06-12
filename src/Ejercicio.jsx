import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Ejercicio = ({ id, titulo }) => {

    const handleClickEliminar = (event) => {
        //Eliminar
        if(confirm("¿Está seguro de eliminar el ejercicio?")){
            axios.post(`/Middle-Point/Eliminar?id=${id}`).then(response => {
            
            }).catch(error => {
                console.info(error);
            }).finally(() => {
                window.location.href = "/Middle-Point/";
            });
        }
        
    }

    return (
        <tr>
            <td>{titulo}</td>
            <td className="AlignCenter">
                <Button
                    variant="success"
                    className="M-6">
                    <Link to={`/Middle-Point/detalle?id=${id}`} className="CustomLink" >
                        Ver ejercicio
                    </Link>
                </Button>
                <Button
                    variant="warning"
                    className="M-6">
                    <Link to={`/Middle-Point/editar?id=${id}`} className="CustomLink" >
                        Editar ejercicio
                    </Link>
                </Button>
                <Button
                    variant="primary"
                    className="M-6">
                    <Link to={`/Middle-Point/probar?id=${id}`} className="CustomLink" >
                        Probar ejercicio
                    </Link>
                </Button>
                <Button
                    variant="danger"
                    className="M-6"
                    onClick={handleClickEliminar}>
                    Eliminar ejercicio
                </Button>
            </td>
        </tr>
    )
}
export default Ejercicio;