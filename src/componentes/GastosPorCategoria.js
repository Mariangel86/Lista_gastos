import React from "react";
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastosDelMesPorCategoria from '../hooks/useObtenerGastosDelMesPorCategoria';

const GastosCategoria=()=> {
 const gastos= useObtenerGastosDelMesPorCategoria();
console.log(gastos);
  return (
      <>
      <Helmet>
        <title>Gasto por Categoria</title>
      </Helmet>
      <Header>
          <BtnRegresar/>
          <Titulo>Gasto por Categoria</Titulo>
      </Header>
      <BarraTotalGastado/>

      </>
  );
}
    
export default GastosCategoria;