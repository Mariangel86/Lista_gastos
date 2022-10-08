import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {doc, getDoc}from './firebase/firestore';


const useObtenerGasto=()=>{
    const [gasto, establecerGasto]= useState('');
    const Navigate= useNavigate();

    useEffect(()=>{
        const[obtenerGasto]= async()=>{
     const documento = getDoc(doc (db, 'gastos', id));

     if(doc.exists){
        establecerGasto(documento);
        }else{
            Navigate('/lista')
        }

    }
        obtenerGasto();
    })
    return [gasto];
}