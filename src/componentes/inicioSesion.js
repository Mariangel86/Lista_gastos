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
    <Formulario>
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
