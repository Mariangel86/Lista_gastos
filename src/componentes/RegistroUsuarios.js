import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton';
import {ContenedorBoton, Input, Formulario} from './../elementos/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from './../imagenes/registro.svg';
import styled from "styled-components";

const RegistroUsuarios=()=> {
  const [correo, establecerCorreo]= useState('');
  const [password, establecerPassword]= useState('');
  const [password2, establecerPassword2]= useState('');

  const handleChange = (e)=>{
    switch(e.target.name){
      case 'email':
        establecerCorreo(e.target.value);
        break;
        case 'password':
        establecerPassword(e.target.value);
        break;
        case 'password2':
        establecerPassword2(e.target.value);
        break;
        default:
        break;
        
    }
  }
  const handleSubmit= (e)=> {
    e.preventDefault();
  

  const expresionRegular= /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
  if (!expresionRegular.test(correo)){console.log('por favor ingresa un correo electronico valido');
    return;
    }
    if (correo === '' || password === '' || password2 === ''){
        console.log('Por favor rellena todos los campos');
        return;
    }
    if (password !== password2){
      console.log('sus contrasenas no son iguales');
      return;
    }
    console.log('Registramos Usuario Correctamente');
  }

  const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25 rem;
  margin-bottom: 1.25 rem;
  `;
  return (
<>
    <Helmet>
      <title>Crear cuenta</title>
    </Helmet>
    <Header>
      <ContenedorHeader>
        <Titulo> Crear cuenta</Titulo>
        <div>
        <Boton to="/iniciar-sesion">Iniciar Sesion</Boton>
        </div>
        </ContenedorHeader>
    </Header>
    <Formulario onSubmit={handleSubmit}>
      <Svg/>
      <Input
      type="email"
      name="email"
      placeholder="Correo Electronico"
      value={correo}
      onChange={handleChange}
      />
      <Input
      type="password"
      name="password"
      placeholder="Contrasena"
      value={password}
      onChange={handleChange}
      />
      <Input
      type="password"
      name="password2"
      placeholder="Repetir la Contrasena"
      value={password2}
      onChange={handleChange}
      />
      <ContenedorBoton>
      <Boton as="button" primario type="submit">Crear Cuenta</Boton>
      </ContenedorBoton>
    </Formulario>
    </>
  );
}
    
export default RegistroUsuarios;