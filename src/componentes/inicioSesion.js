import React, {useState} from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton';
import {ContenedorBoton, Input, Formulario} from './../elementos/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from './../imagenes/login.svg';
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import Alerta from "../elementos/Alerta";
import { useNavigate } from "react-router-dom";

  const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5 rem;
  margin-bottom: 1.25 rem;
  `;
const InicioSesion=()=> {

  const [correo, establecerCorreo]= useState('');
  const [password, establecerPassword]= useState('');
  const [alerta, cambiarAlerta]= useState({});
  const [estadoAlerta, cambiarEstadoAlerta]= useState(false);
  const navigate= useNavigate ();
  const handleChange=(e)=>{
    if (e.target.name=== 'email'){
      establecerCorreo(e.target.value);
    } else if (e.target.name=== 'password'){
      establecerPassword(e.target.value);
    }
  }
  const handleSubmit= async (e)=> {
    e.preventDefault();
  

  const expresionRegular= /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
  if (!expresionRegular.test(correo)){
    cambiarEstadoAlerta(true)
    cambiarAlerta({
      tipo: 'error',
      mensaje: 'Por favor ingresa un correo valido'
    });
    return;
    }
    if (correo === '' || password === ''){
        cambiarEstadoAlerta(true)
        cambiarAlerta({
          tipo: 'error',
          mensaje: 'Por favor ingresa todos los datos'
        });
        return;
    }
  
    try {
      await signInWithEmailAndPassword (auth,correo,password);
      navigate('/');
    }  catch (error){
      cambiarEstadoAlerta(true);

        let mensaje;
        switch(error.code){
          case 'auth/wrong-password':
            mensaje= 'la contrasena no es correcta.'
            break;
            case 'auth/user-not-found':
              mensaje= 'no se encontro ningun usuario existente'
              break;
          default:
              mensaje = 'Hubo un error al intentar crear la cuenta.'
              break;
      }
      cambiarAlerta({tipo:'error', mensaje:{mensaje}});
      }
  }
  return (
<>
    <Helmet>
      <title>Iniciar Sesion</title>
    </Helmet>
    <Header>
      <ContenedorHeader>
        <Titulo> Iniciar Sesion</Titulo>
        <div>
        <Boton to="/crear-cuenta">Registrarse</Boton>
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
      <ContenedorBoton>
      <Boton as="button" primario type="submit">Iniciar Sesion</Boton>
      </ContenedorBoton>
    </Formulario>
    <Alerta 
    tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}/>
    </>
  );
}
    
export default InicioSesion;
