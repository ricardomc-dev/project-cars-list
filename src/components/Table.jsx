import React, { useContext } from 'react';
import CarsContext from '../context/CarsContext';

function Table() {
  const { arrayCars } = useContext(CarsContext);
  const columns = arrayCars[0] && Object.keys(arrayCars[0]);

  return (
    <table>
      <thead>
        <tr>
          {arrayCars[0] && (
            columns.map((item, i) => (
            <th key={ `col${i}` }>
              {item}
            </th>
          )))}
        </tr>
      </thead>
      <tbody>
        {arrayCars.map((car, i) => (
          <tr key={ `row${i}` }>
            <td>{ car.id }</td>
            <td>{ car.placa }</td>
            <td>{ car.chassi }</td>
            <td>{ car.renavam }</td>
            <td>{ car.marca }</td>
            <td>{ car.modelo }</td>
            <td>{ car.ano }</td>
          </tr>
        ))}
        
      </tbody>
    </table>
  )
}

export default Table;