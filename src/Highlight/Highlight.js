import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoSrc from '../assets/Logo.png';
import Login from './LoginCard/LoginCard';
import Home from '../pages/Home';

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
  justify-content:center;
`;


const Header = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Logo src={LogoSrc} />
        <Login />
      </Wrapper>
      
      <Switch>
      <Route>
        <Home/>
      </Route>
    </Switch>
    
    </BrowserRouter>

  )
}

export default Header;