import React from 'react';
import styled from 'styled-components';
import { Link, Switch, Route, } from 'react-router-dom';
import Home from '../../pages/Home';

const Wrapper = styled.div`
width:705px;
height:733px;
background-color:white;
border-radius:15px;

`;
const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: #707070;
  font-family: Roboto;
`;
const Input = styled.input`
width:476px;
height:90px;
border-radius:10px;
font-size: 30px;
font-family: Roboto;
margin-top: 10px;
`;
const Butao = styled.button`
width:475px;
height:90px;
margin-top: 10px;
`;
const ButtonF = styled.button`
width:475px;
height:90px;
margin-top: 10px;
`;

const Login = () => {
  return (
    <Wrapper>
      <Title>
        Fazer login
      </Title>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <Link to="/">
      <Butao>Entrar</Butao>
      </Link>
      <Link to="ForgotPassword">
      <ButtonF>Esqueci minha senha</ButtonF>
      </Link>

    
    </Wrapper>
  )
}

export default Login;