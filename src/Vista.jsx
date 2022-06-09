import React from "react";

const Vista = ({ id, titulo, x1, y1, x2, y2 }) => {

    return (
        <div class="tablePoint">
                <h1>{titulo}</h1><br />
                <p><strong>ID: </strong>{id}</p><br />
                <table style={{ width: "80%" }}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>X</th>
                            <th>Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>P1</td>
                            <td>{x1}</td>
                            <td>{y1}</td>
                        </tr>
                        <tr>
                            <td>P2</td>
                            <td>{x2}</td>
                            <td>{y2}</td>
                        </tr>
                    </tbody>
                </table>                
        </div>
           
           
    )
}
export default Vista;