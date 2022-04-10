import React, { useState, useContext } from 'react';
import CarsContext from '../context/CarsContext';

function Table() {
  const { arrayCars } = useContext(CarsContext);
  const columns = arrayCars[0] && Object.keys(arrayCars[0]);

  return (
    <div className="container-lg mb">
      <table class="table">
        <thead>
          <tr>
            {arrayCars[0] && (
              columns.map((item, i) => (
              <th key={ `col${i}` } scope="col">
                {item}
              </th>
            )))}
          </tr>
        </thead>
        <tbody>
          {arrayCars.map((car, i) => (
            <tr key={ `row${i}` }>
              <td class="table-light">{ car.id }</td>
              <td class="table-light">{ car.placa }</td>
              <td class="table-light">{ car.chassi }</td>
              <td class="table-light">{ car.renavam }</td>
              <td class="table-light">{ car.marca }</td>
              <td class="table-light">{ car.modelo }</td>
              <td class="table-light">{ car.ano }</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Table;
