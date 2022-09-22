import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton';
import {ContenedorBoton, Input, Formulario} from './../elementos/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from './../imagenes/login.svg';
import styled from "styled-components";


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
    if (correo === '' || password === '' || password2 === ''){
        cambiarEstadoAlerta(true)
        cambiarAlerta({
          tipo: 'error',
          mensaje: 'Por favor ingresa todos los datos'
        });
        return;
    }
    if (password !== password2){
      cambiarEstadoAlerta(true)
      cambiarAlerta({
        tipo: 'error',
        mensaje: 'Las contrasenas no son iguales'
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword (auth,correo,password);
      navigate('/');
    }  catch (error){
      cambiarEstadoAlerta(true);

        let mensaje;
        switch(error.code){
          case 'auth/invalid-password':
              mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
              break;
          case 'auth/email-already-in-use':
              mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
          break;
          case 'auth/invalid-email':
              mensaje = 'El correo electrónico no es válido.'
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
    </>
  );
}
    
export default InicioSesion;
