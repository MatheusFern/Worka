import React from 'react';
import styled from 'styled-components';
import { Link, } from 'react-router-dom';

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


const ForgotCard = () => {
  return (
    <Wrapper>
      <Title>
        Esqueceu sua senha ?
      </Title>
      <Input placeholder="Email" />
      
      <Link to="/">
      <Butao>Enviar</Butao>
      </Link>
      

    
    </Wrapper>
  )
}

export default ForgotCard;