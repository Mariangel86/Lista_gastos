import React, {useState} from "react";
import Boton from "../elementos/Boton";
import {ContenedorBoton, InputGrande, Input, Formulario, ContenedorFiltros } from '../elementos/ElementosDeFormulario';
import {ReactComponent as IconoPlus} from '../imagenes/plus.svg';
import SelectCategorias from "./SelectCategorias";

const FormularioGasto=()=>{
    const [inputDescripcion, cambiarInputDescripcion]=useState('');
    const [inputCantidad, cambiarInputCantidad]=useState('');
    const [categoria, cambiarCategoria]=useState('hogar');

    const handleChange=(e)=>{
        if (e.target.name === 'descripcion'){
            cambiarInputDescripcion(e.target.value);
        } else if (e.target.name === 'valor');{
        cambiarInputCantidad (e.target.value.replace(/[^0-9.]/g,''));
        }
    }
    return (
        <Formulario>
            <ContenedorFiltros>
                <SelectCategorias categoria={categoria}
                cambiarCategoria={cambiarCategoria}/>
                <p>Select</p>
                <p>date piker</p>
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
                    <IconoPlus/>
                </Boton>
            </ContenedorBoton>
        </Formulario>
    );
}
export default FormularioGasto;