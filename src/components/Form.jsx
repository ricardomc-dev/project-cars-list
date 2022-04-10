import React, { useState, useContext } from 'react';
import CarsContext from '../context/CarsContext';

function Form() {
  const [placa, setPlaca] = useState('');
  const [chassi, setChassi] = useState('');
  const [renavam, setRenavam] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');

  const { arrayCars, setArrayCars } = useContext(CarsContext);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'placa':
        setPlaca(value);
        break;
      case 'chassi':
        setChassi(value);
        break;
      case 'renavam':
        setRenavam(value);
        break;
      case 'marca':
        setMarca(value);
        break;
      case 'modelo':
        setModelo(value);
        break;
      case 'ano':
        setAno(value);
        break;
      default:
    }
  };

  const handleClick = () => {
    const newCarObj = {
      id: arrayCars.length +1,
      placa: placa,
      chassi: chassi,
      renavam: renavam,
      marca: marca,
      modelo: modelo,
      ano: ano,
    }

    setArrayCars([...arrayCars, newCarObj])

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
        <div className="col-md-2">
          <label htmlFor="placa" class='form-label'>Placa</label>
          <input
            id="placa"
            className='form-control'
            type="text"
            name="placa"
            value={ placa }
            onChange={ handleChange }
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
            onChange={ handleChange }
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="renavam" class='form-label'>Renavam</label>
          <input
            id="renavam"
            className='form-control'
            type="number"
            name="renavam"
            value={ renavam }
            onChange={ handleChange }
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
            onChange={ handleChange }
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
            onChange={ handleChange }
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
            onChange={ handleChange }
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
