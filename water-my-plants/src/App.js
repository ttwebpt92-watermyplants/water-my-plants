import React from 'react'
import { NavLinks, Route } from 'react-router'
import styled, { css } from 'styled-components'

import SignupForm from './SignupForm'

import './App.css';


function App() {


  return (
    <MainDiv>
      <HeaderDiv>
        Water My Plants
      </HeaderDiv>
      <NavBar>
        <NavButton>Home</NavButton>
        <NavButton>Register</NavButton>
        <NavButton>Login</NavButton>
        <NavButton>Help</NavButton>
      </NavBar>

      <StyledDiv>
        <h2>Keep Track Of All Your Beloved Plants!</h2>
        <p>Lorem ipsum dolorem.</p>
      </StyledDiv>

      <StyledDiv>
        <h2>Set A Daily/Weekly Schedule!</h2>
        <p>Lorem ipsum dolorem.</p>
      </StyledDiv>

      <StyledDiv>
        <h2>Search From Our Large Database Of Plants!</h2>
        <p>Lorem ipsum dolorem.</p>
      </StyledDiv>

      <StyledDiv>
        <h2>Easily Edit Your Saved Schedules!</h2>
        <p>Lorem ipsum dolorem.</p>
      </StyledDiv>

      <Route exact path="/SignupForm">
        <SignupForm/>
      </Route>

    </MainDiv>

    
  );
}

export default App;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
`;

const HeaderDiv = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
`;

const NavButton = styled.button`
  display: flex;
  flex-direction: row;
  border: 1px solid teal;
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
`;