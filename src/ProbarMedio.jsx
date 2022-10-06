import React from "react";
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineMarkSeries} from 'react-vis';

const ProbarMedio = ({ id, titulo, x1, y1, x2, y2, puntos, procedimiento }) => {

    return (
        <div class="tablePoint">
                <h1>{titulo}</h1><br />
                <p><strong>ID: </strong>{id}</p><br />
                <div class="separated" style={{display: 'inline-flex'}} width="100%">
                    <table style={{ width: "50%" }}>
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
                    

                    <div class="graph-div" style={{display: 'inline'}}>
                    <h3>Gráfica</h3><br />
                        <XYPlot width={300} height={300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis title="X" />
                            <YAxis title="Y"/>
                            
                            <LineMarkSeries
                                color="blue"
                                data={[{x: x1, y: y1}, {x: x2, y: y2}]}
                                className="linemark-series-example"
                                style={{
                                strokeWidth: '3px'
                                }}
                                lineStyle={{stroke: 'red'}}
                                markStyle={{stroke: 'blue'}}
                               />
                               
                                                           
                        </XYPlot>
                    </div>
                </div>
<br />
                <div class="separated" style={{display: 'inline-flex'}} width="100%">
                <div class="procedimiento">
                    <h3>Procedimiento</h3>
                    <p>La formula para hallar el punto medio entre dos puntos es:</p><br/>
                    <img src="./Images/medio.png" alt="formula" /><br/>
                </div>
                <div class="solucion">
                    <p><strong>Solución</strong></p><br />
                    <p>{procedimiento.at(0)['l1']}</p>
                <p>{procedimiento.at(0)['l2']}</p>
                <p><strong>{procedimiento.at(0)['l3']}</strong></p>
                </div>
            </div>
                               
        </div>
           
           
    )
}
export default ProbarMedio;