import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo} from './../elementos/Header';
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";

const ListaDeGastos=()=> {
  return (
    <>
    <Helmet>
      <title>Lista de Gastos</title>
    </Helmet>
    <Header>
        <BtnRegresar/>
        <Titulo>Lista de Gastos</Titulo>
    </Header>
    <BarraTotalGastado/>
    </>
  );
}
    
export default ListaDeGastos;