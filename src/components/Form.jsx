import React, { useState, useContext } from 'react';
import CarsContext from '../context/CarsContext';

function Form() {
  const [id, setId] = useState(0);
  const [placa, setPlaca] = useState('');
  const [chassi, setChassi] = useState('');
  const [renavam, setRenavam] = useState(0);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');

  const { arrayCars, setArrayCars } = useContext(CarsContext);

  const handleIdChange = ({ target: { value } }) => {
    setId(value);
  };

  const handlePlacaChange = ({ target: { value } }) => {
    setPlaca(value);
  };

  const handleChassiChange = ({ target: { value } }) => {
    setChassi(value);
  };

  const handleRenavamChange = ({ target: { value } }) => {
    setRenavam(value);
  };

  const handleMarcaChange = ({ target: { value } }) => {
    setMarca(value);
  };

  const handleModeloChange = ({ target: { value } }) => {
    setModelo(value);
  };

  const handleAnoChange = ({ target: { value } }) => {
    setAno(value);
  };

  const handleClick = () => {
    const newCarObj = {
      id: id,
      placa: placa,
      chassi: chassi,
      renavam: renavam,
      marca: marca,
      modelo: modelo,
      ano: ano,
    }

    setArrayCars([...arrayCars, newCarObj])

    setId(0);
    setPlaca('');
    setChassi('');
    setRenavam(0);
    setMarca('');
    setModelo('');
    setAno(0);
  }
  
    
  return (
    <form>
      <label htmlFor="id">
        id:
        <input
          id="id"
          type="number"
          name="id"
          value={ id }
          onChange={ handleIdChange }
        />
      </label>
      <label htmlFor="placa">
        placa:
        <input
          id="placa"
          type="text"
          name="placa"
          value={ placa }
          onChange={ handlePlacaChange }
        />
      </label>
      <label htmlFor="chassi">
        chassi:
        <input
          id="chassi"
          type="text"
          name="chassi"
          value={ chassi }
          onChange={ handleChassiChange }
        />
      </label>
      <label htmlFor="renavam">
        renavam:
        <input
          id="renavam"
          type="number"
          name="renavam"
          value={ renavam }
          onChange={ handleRenavamChange }
        />
      </label>
      <label htmlFor="marca">
        marca:
        <input
          id="marca"
          type="text"
          name="marca"
          value={ marca }
          onChange={ handleMarcaChange }
        />
      </label>
      <label htmlFor="modelo">
        modelo:
        <input
          id="modelo"
          type="text"
          name="modelo"
          value={ modelo }
          onChange={ handleModeloChange }
        />
      </label>
      <label htmlFor="ano">
        ano:
        <input
          id="ano"
          type="number"
          name="ano"
          value={ ano }
          onChange={ handleAnoChange }
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
      >
        Adicionar carro
      </button>
    </form>
  )
}

export default Form;


