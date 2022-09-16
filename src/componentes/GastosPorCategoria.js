import React from "react";
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";

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
      </>
  );
}
    
export default GastosCategoria;