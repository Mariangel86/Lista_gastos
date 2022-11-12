import { useState, useEffect } from "react";
import {db} from '../firebase/firebaseConfig';
import { collection,query,onSnapshot,where,orderBy } from "firebase/firestore";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns/esm/fp";
import { UseAuth } from "../contextos/AuthContextos";

const useObtenerGastosDelMes=()=>{
    const [gastos, establecerGastos]= useState([]);
    const {usuario} = UseAuth();

    useEffect(()=>{
        const inicioDeMes= getUnixTime(startOfMonth(new Date()));
        const finDeMes= getUnixTime(endOfMonth(new Date()));

        if(usuario){
        const consulta= query(
            collection(db, 'gastos'),
            where('fecha', '>=', inicioDeMes),
            where('fecha', '<=', finDeMes),
            where('uidUsuario', '==', usuario.uid),
            orderBy('fecha', 'desc'),
        );

       const unsuscribe= onSnapshot(consulta,(snapshot)=>{
                establecerGastos(snapshot.docs.map((documento)=>{
                    return {...documento.data(), id:documento.id}
                }))
            },(error)=>{console.log(error)});


    return unsuscribe;
    }
},[usuario]);

    return gastos;
}

export default useObtenerGastosDelMes;