import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Ejercicio = ({ id, titulo }) => {

    const handleClickEliminar = (event) => {
        //Eliminar
        axios.post(`/Middle-Point/Eliminar?id=${id}`).then(response => {
            console.info(response.data);
            if (response.data.message) {
                alert(response.data.message);
            } else {
                alert(response.data.error);
            }
        }).catch(error => {
            console.info(error);
            alert(response.data.message);
        }).finally(() => {
            window.location.href = "/Middle-Pint/";
        });
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
                    <Link to={`/Middle-Point/editar?id=${id}?type=true`} className="CustomLink" >
                        Editar ejercicio
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