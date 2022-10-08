import React from "react";
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import FormularioGasto from './FormularioGasto';
import { useParams } from "react-router-dom";


const editarGasto=()=> {
  const {id}= useParams();
  return (
      <>
      <Helmet>
        <title>editarGasto</title>
      </Helmet>
      <Header>
          <BtnRegresar/>
          <Titulo>editarGasto</Titulo>
      </Header>
      <FormularioGasto gasto={gasto}/>
      <BarraTotalGastado/>
      </>
  );
}
    
export default GastosCategoria;