import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton';
import {ContenedorBoton, InputGrande, Input, Formulario, ContenedorFiltros } from './../elementos/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from './../imagenes/registro.svg';
import styled from "styled-components";

const RegistroUsuarios=()=> {
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
    <Formulario>
      <Svg/>
      <Input
      type="email"
      name="email"
      placeholder="Correo Electronico"
      />
      <Input
      type="password"
      name="password"
      placeholder="Contrasena"
      />
      <Input
      type="password"
      name="password2"
      placeholder="Repetir la Contrasena"
      />
      <ContenedorBoton>
      <Boton as="button" primario type="submit">Crear Cuenta</Boton>
      </ContenedorBoton>
    </Formulario>
    </>
  );
}
    
export default RegistroUsuarios;