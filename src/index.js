import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import InicioSesion from './componentes/inicioSesion';
import Fondo from './elementos/Fondo';


WebFont.load({
  google: {
    families: ['Worksans:400,500,700', 'sans-serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/Iniciar-Sesion' element={<InicioSesion/>}/>
      <Route path='/Crear-cuenta' element={<RegistroUsuarios/>}/>
      <Route path='/Categorias' element={<GastosPorCategoria/>}/>
      <Route path='/Lista' element={<ListaDeGastos/>}/>
      <Route path='/Editar/:id' element={<EditarGasto></EditarGasto>}/>
      <Route  path='/' element= {<App/>}/>
    </Routes>
    <Contenedor/>
    </BrowserRouter>
    <Fondo/>
  </React.StrictMode>
);