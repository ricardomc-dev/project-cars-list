import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CarsContext from './CarsContext';
import { apiCars } from '../service/ApiCars';

function CarsProvider({children}) {
  const [arrayCars, setArrayCars] = useState([]);

  useEffect(() => {
    async function apiCarsRequest() {
      const data = await apiCars()
      setArrayCars(data);
    }
    apiCarsRequest();
  }, []);

  const contextValue = {
    arrayCars,
    setArrayCars,
  }

  return (
    <CarsContext.Provider value={ contextValue }>
      {children}
    </CarsContext.Provider>
  )
}

CarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CarsProvider;
