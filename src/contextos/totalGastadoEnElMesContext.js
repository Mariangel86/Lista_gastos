import React, {useContext,useEffect,useState} from "react";
import useObtenerGastosDelMes from "../hooks/useObtenerGastosDelMes";

const totalGastadoContext= React.createContext();

const useTotalDelMes=()=> useContext(totalGastadoContext);
// con el useTotalDelMes esta accediendo al total

const TotalGastadoProvider=({children})=>{

    const[total, cambiarTotal]= useState(0);
    const gastos= useObtenerGastosDelMes();

    useEffect(()=>{
        let acumulado= 0;
        gastos.forEach((gasto) => {
            acumulado += gasto.cantidad
            cambiarTotal(acumulado);
        });
    },[gastos])

    return(
        <totalGastadoContext.Provider value={{total:total}}>
            {children}
        </totalGastadoContext.Provider>
    );
}

export {TotalGastadoProvider, useTotalDelMes};