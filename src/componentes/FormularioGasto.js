import React, {useEffect, useState} from "react";
import Boton from "../elementos/Boton";
import {ContenedorBoton, InputGrande, Input, Formulario, ContenedorFiltros } from '../elementos/ElementosDeFormulario';
import {ReactComponent as IconoPlus} from '../imagenes/plus.svg';
import SelectCategorias from "./SelectCategorias";
import DatePiker from "./DatePiker";
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import agregarGasto from "../firebase/AgregarGasto";
import {UseAuth} from '../contextos/AuthContextos';
import Alerta from '../elementos/Alerta';
import { useNavigate } from "react-router-dom";
import editarGasto from '../firebase/editarGasto';

const FormularioGasto=({gasto})=>{
    
    const [inputDescripcion, cambiarInputDescripcion]=useState('');
    const [inputCantidad, cambiarInputCantidad]=useState('');
    const [categoria, cambiarCategoria]=useState('hogar');
    const {usuario}= UseAuth();
    const [estadoAlerta, cambiarEstadoAlerta]= useState(false);
    const [alerta, cambiarAlerta]= useState({});
    const Navigate= useNavigate();

    useEffect(()=>{
        if(gasto){
            if(gasto.data().uidUsuario=== usuario.uid){
                cambiarCategoria(gasto.data().categoria);
                cambiarFecha(fromUnixTime (gasto.data().fecha));
                cambiarInputDescripcion(gasto.data().descripcion);
                cambiarInputCantidad(gasto.data().cantidad);
            }else{
                Navigate('/Lista');
            }
        }
    },[gasto,usuario, Navigate]);

    //datepicker
    const [fecha, cambiarFecha]= useState (new Date());


    const handleChange=(e)=>{
        if (e.target.name === 'descripcion'){
            cambiarInputDescripcion(e.target.value);
        } else if (e.target.name==='valor'){
        cambiarInputCantidad (e.target.value.replace(/[^0-9.]/g,''));
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let cantidad= parseFloat(inputCantidad).toFixed(2);
        
        if (inputDescripcion !== '' && inputCantidad !== ''){

            if (cantidad){
                if(gasto){
                    editarGasto({
                        id:gasto.id,
                        categoria: categoria,
                    descripcion: inputDescripcion,
                    cantidad: Number(cantidad),
                    fecha: getUnixTime (fecha)
                    }).then(()=>{
                        Navigate('/Lista');
                    }).catch((error)=>{
                        console.log(error);
                    })
                }else{
                    agregarGasto ({
                        categoria: categoria,
                    descripcion: inputDescripcion,
                    cantidad: Number(cantidad),
                    fecha: getUnixTime (fecha),
                    uidUsuario: usuario.uid
                    })  
                    .then(()=>{
                            cambiarCategoria('hogar');
                            cambiarInputDescripcion('');
                            cambiarInputCantidad('');
                            cambiarFecha (new Date());
                            cambiarEstadoAlerta(true);
                    cambiarAlerta ({tipo: 'exito', mensaje:'el gasto se agrego correctamente'});
                    })
                    .catch((error)=>{
                        cambiarEstadoAlerta(true);
                    cambiarAlerta ({tipo: 'error', mensaje:'hubo un problema al ingresar tu gasto.'})
                    })
                }
              
        }else{
                cambiarEstadoAlerta(true);
        cambiarAlerta ({tipo: 'error', mensaje:'el valor que ingresaste no es correcto'})
            }
        
        } else{
            cambiarEstadoAlerta(true);
        cambiarAlerta ({tipo: 'error', mensaje:'Por favor rellena todos los campos'})
        }
    }
    return (
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias categoria={categoria}
                cambiarCategoria={cambiarCategoria}/>
                <DatePiker fecha={fecha} cambiarFecha={cambiarFecha}/>
            </ContenedorFiltros>
            <div>
            <Input
            type='text'
            name='descripcion'
            id='descripcion'
            placeholder="descripcion del gasto"
            value={inputDescripcion}
            onChange={handleChange}
            />

            <InputGrande
            type='text'
            name='valor'
            id='valor'
            placeholder="$0.00"
            value={inputCantidad}
            onChange={handleChange}
            />
            </div>
            <ContenedorBoton>
                <Boton as='button' primario conIcono type="submit">
                    {gasto ? 'Editar Gasto': 'Agregar Gasto'}
                    <IconoPlus/>
                </Boton>
            </ContenedorBoton>
            <Alerta 
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            cambiarEstadoAlerta={cambiarEstadoAlerta}/>
        </Formulario>
    );
}
export default FormularioGasto;