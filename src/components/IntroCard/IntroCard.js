import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoSrc from '../../assets/Logo.png';

const Logo = styled.img`
    padding-top: 2em ;    
    width: 831px;
    height: 390px;
    margin: 15px;
`;

const Wrapper = styled.section`
  display:flex;
  height: 67.5rem ;
  width: 120rem;
  background-color: #2E65FF;
  flex-direction: row;
  justify-content: space-around;
`;

const WrapperCard = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  width:705px;
  height:733px;
  background-color:white;
  border-radius:25px;

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

const IntroCard = () => {
  return (
    <Wrapper>
      <Logo src={LogoSrc} />
      <WrapperCard>
        <Title>Bem vindo ao Worka !</Title>

        <Link to="/">
          <Butao>Fazer Login</Butao>
        </Link>
        <Link to="Forgot">
          <ButtonF>Esqueci minha senha</ButtonF>
        </Link>


      </WrapperCard>


    </Wrapper>
  )
}

export default IntroCard;