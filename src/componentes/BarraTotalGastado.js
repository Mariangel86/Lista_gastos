import React from "react";
import theme from "../elementos/theme";
import styled from "styled-components";
import ConvertirAMoneda from "../funciones/ConvertirAMoneda";
import { useTotalDelMes } from "../contextos/totalGastadoEnElMesContext";


const BarraTotalGastado=()=> {

    const {total}=useTotalDelMes();
    return (
        <BarraTotal>
            <p> total gastado en el mes:</p>
            <p>{ConvertirAMoneda(total)}</p>
        </BarraTotal>
  
    );
  }
  const BarraTotal = styled.div`
    background: ${theme.verde};
    font-size: 1.25rem; /* 20px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: end;
 
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
` ;
      
  export default BarraTotalGastado;