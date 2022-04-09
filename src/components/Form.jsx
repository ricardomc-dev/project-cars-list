import React, { useState, useContext } from 'react';
import CarsContext from '../context/CarsContext';

function Form() {
  const [id, setId] = useState('');
  const [placa, setPlaca] = useState('');
  const [chassi, setChassi] = useState('');
  const [renavam, setRenavam] = useState('');
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

    setId('');
    setPlaca('');
    setChassi('');
    setRenavam('');
    setMarca('');
    setModelo('');
    setAno('');
  }
  
    
  return (
    <section className="container-lg mb-5">
      <div className="text-center">
        <p class='lead'>Fill in the form to add an item to the table!</p>
      </div>

      <form className='row g-3'>
        <div className="col-md-1">
          <label htmlFor="id" class='form-label'>Id</label>
          <input
            id="id"
            className='form-control'
            type="number"
            name="id"
            value={ id }
            onChange={ handleIdChange }
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="placa" class='form-label'>Placa</label>
          <input
            id="placa"
            className='form-control'
            type="text"
            name="placa"
            value={ placa }
            onChange={ handlePlacaChange }
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="chassi" class='form-label'>Chassi</label>
          <input
            id="chassi"
            className='form-control'
            type="text"
            name="chassi"
            value={ chassi }
            onChange={ handleChassiChange }
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="renavam" class='form-label'>Renavam</label>
          <input
            id="renavam"
            className='form-control'
            type="number"
            name="renavam"
            value={ renavam }
            onChange={ handleRenavamChange }
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="marca">Marca</label>
          <input
            id="marca"
            className='form-control'
            type="text"
            name="marca"
            value={ marca }
            onChange={ handleMarcaChange }
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="modelo">Modelo</label>
          <input
            id="modelo"
            className='form-control'
            type="text"
            name="modelo"
            value={ modelo }
            onChange={ handleModeloChange }
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="ano">Ano</label>
          <input
            id="ano"
            className='form-control'
            type="number"
            name="ano"
            value={ ano }
            onChange={ handleAnoChange }
          />
        </div>
        <div className="col-12">
          <button
          className='btn btn-secondary'
            type="button"
            onClick={ handleClick }
          >
            Adicionar carro
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form;
