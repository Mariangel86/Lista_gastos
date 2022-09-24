import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuth } from "../contextos/AuthContextos";

const RutaProtegida =({children})=>{
    const usuario= UseAuth();

        if (usuario){
            return children;
        } else{
            return <Navigate replace to='/iniciar-sesion'/>
        }
     
}
export default RutaProtegida;