import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo} from './../elementos/Header';
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastos from "../hooks/useObtenerGastos";
import IconoCategoria from '../elementos/IconoCategoria'
import {
  Lista ,
  ElementoLista ,
  ListaDeCategorias ,
  ElementoListaCategorias ,
  Categoria ,
  Descripcion ,
  Valor ,
  Fecha,
  ContenedorBotones ,
  BotonAccion,
  BotonCargarMas ,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo
} from '../elementos/ElementosDeLista';

const ListaDeGastos=()=> {
  const [gastos]=useObtenerGastos();
  console.log(gastos);
  return (
    <>
    <Helmet>
      <title>Lista de Gastos</title>
    </Helmet>
    <Header>
        <BtnRegresar/>
        <Titulo>Lista de Gastos</Titulo>
    </Header>
    <Lista>
      {gastos.map((gasto)=>{
        return(
          <ElementoLista key={gasto.id}>
            <Categoria>
              <IconoCategoria id={gasto.Categoria}/>
              {gasto.Categoria}
            </Categoria>
            <Descripcion>
              {gasto.descripcion}
            </Descripcion>
            <Valor>{gasto.cantidad}</Valor>
          </ElementoLista>
        );
      })}
      </Lista>
    <BarraTotalGastado/>
    </>
  );
}
    
export default ListaDeGastos;