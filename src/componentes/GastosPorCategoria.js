import React from "react";
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastosDelMesPorCategoria from '../hooks/useObtenerGastosDelMesPorCategoria';
import {ListaDeCategorias,ElementoListaCategorias,Categoria,Valor} from '../elementos/ElementosDeLista';
import IconoCategoria from '../elementos/IconoCategoria';
import convertirAMoneda from '../funciones/ConvertirAMoneda';

const GastosCategoria=()=> {
 const gastosPorCategorias = useObtenerGastosDelMesPorCategoria();
console.log(gastosPorCategorias);
  return (
      <>
      <Helmet>
        <title>Gasto por Categoria</title>
      </Helmet>
      <Header>
          <BtnRegresar/>
          <Titulo>Gasto por Categoria</Titulo>
      </Header>

      <ListaDeCategorias>
      {gastosPorCategorias.map((elemento, index)=>{
          return (
            <ElementoListaCategorias key={index}>
              <Categoria>
                <IconoCategoria
                id={elemento.categoria}/>
              {elemento.categoria}
              </Categoria>
              <Valor>{convertirAMoneda(elemento.cantidad)}</Valor>
            </ElementoListaCategorias>
          );
      })}
      </ListaDeCategorias>

      <BarraTotalGastado/>

      </>
  );
}
    
export default GastosCategoria;