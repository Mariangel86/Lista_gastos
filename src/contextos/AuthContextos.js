import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";


// Creando el contexto
const AuthContext= React.createContext();

//hook para acceder al contexto de inicio de sesion en todas las paginas

const UseAuth=()=>{
    return useContext(AuthContext);
}
const AuthProvider=({children})=>{
    const [usuario, cambiarUsuario]= useState();
    const [cargando, cambiarCargando]= useState(true);
    //comprobacion de una sola vez

    useEffect(()=>{
 // comprobando si hay un usuario
        const cancelarSuscripcion= onAuthStateChanged(auth, (usuario)=>{
            cambiarUsuario(usuario);
            cambiarCargando(false);
        });
        return cancelarSuscripcion;

    },[]);

    return (
<AuthContext.Provider value={{usuario:usuario}}>
    {!cargando && children}
</AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext, UseAuth};