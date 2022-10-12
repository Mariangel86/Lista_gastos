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
import {AuthProvider} from './contextos/AuthContextos';
import RutaProtegida from './componentes/RutaPrivada';
import {TotalGastadoProvider} from './contextos/totalGastadoEnElMesContext'

WebFont.load({
  google: {
    families: ['Work sans 400,500,700', 'sans-serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<AuthProvider>
    <TotalGastadoProvider>
          <BrowserRouter>
                <Routes>
                  <Route path='/Iniciar-Sesion' element={<InicioSesion/>}/>
                  <Route path='/Crear-cuenta' element={<RegistroUsuarios/>}/>


                  <Route path='/Categorias' element={
                    <RutaProtegida>
                  <GastosPorCategoria/>
                  </RutaProtegida>
                }/>
                  <Route path='/Lista' element={
                  <RutaProtegida>
                  <ListaDeGastos/>
                  </RutaProtegida>}/>

                  <Route path='/Editar/:id' element={
                    <RutaProtegida>
                  <EditarGasto/>
                  </RutaProtegida>}/>

                  <Route  path='/' element={
                  <RutaProtegida>
                  <App/>
                  </RutaProtegida>}/>
                </Routes>
            <Contenedor/>
          </BrowserRouter>
      </TotalGastadoProvider>
    </AuthProvider>
    <Fondo/>
    </>
);