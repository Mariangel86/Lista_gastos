import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {doc, getDoc}from 'firebase/firestore';


const useObtenerGasto=(id)=>{
    const [gasto, establecerGasto]= useState('');
    const Navigate= useNavigate();

    useEffect(()=>{
        const[obtenerGasto]= async()=>{
     const documento =  await getDoc(doc(db, 'gastos', id));

     if(documento.exists){
        establecerGasto(documento);
        }else{
            Navigate('/lista')
        }

    }
        obtenerGasto();
    })
    return [gasto];
}

export default useObtenerGasto;