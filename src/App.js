import React from 'react';
import './App.css';

import Routes from './Routes';
import CarsProvider from './context/CarsProvider';

function App() {
  return (
    <CarsProvider>
      <Routes />
    </CarsProvider>
    
  );
}

export default App;
