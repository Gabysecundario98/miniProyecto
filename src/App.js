import './App.css';
import React from 'react';
import Formulario from './componentes/formulario';
import Tarjetas from './componentes/tarjeta'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Formulario />}></Route>
        <Route path='/tarjetas' element={<Tarjetas />}></Route> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
