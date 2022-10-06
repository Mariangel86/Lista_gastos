import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo} from './../elementos/Header';
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastos from "../hooks/useObtenerGastos";
import IconoCategoria from '../elementos/IconoCategoria';
import ConvertirAMoneda from '../funciones/ConvertirAMoneda';
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
import { ReactComponent as IconoEditar } from '../imagenes/editar.svg';
import { ReactComponent as IconoBorrar } from '../imagenes/borrar.svg';
import { Link } from "react-router-dom";
import Boton from "../elementos/Boton";


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
              <IconoCategoria id={gasto.categoria}/>
              {gasto.categoria}
            </Categoria>
            
            <Descripcion>
              {gasto.descripcion}
            </Descripcion>
            <Valor>{ConvertirAMoneda(gasto.cantidad)}</Valor>
            <ContenedorBotones>
              <BotonAccion as={Link} to={`/editar/${gasto.id}`}><IconoEditar/></BotonAccion>
              <BotonAccion><IconoBorrar/></BotonAccion>
            </ContenedorBotones>
          </ElementoLista>
        );
      })}
      <ContenedorBotonCentral>
        <BotonCargarMas>Cargar Mas</BotonCargarMas>
      </ContenedorBotonCentral>
      {gastos.length === 0 &&
      <ContenedorSubtitulo>
        <Subtitulo>No hay mas gastos por mostrar</Subtitulo>
        <Boton as={Link} to="/">Agregar Gasto</Boton>
        </ContenedorSubtitulo>}
      </Lista>
    <BarraTotalGastado/>
    </>
  );
}
    
export default ListaDeGastos;