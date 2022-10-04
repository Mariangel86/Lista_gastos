import React from "react";
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";


const GastosCategoria=()=> {
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