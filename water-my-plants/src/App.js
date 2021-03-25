import React from 'react'
import { Route, NavLinks } from 'react-router-dom'
import styled, { css } from 'styled-components'

import './App.css';

import SignupForm from './SignupForm'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Login from './Login'

function App() {


  return (
    <MainDiv>
      <HeaderDiv>Water My Plants</HeaderDiv>

      <Navbar />
      <Homepage />

      <Route exact path="/Homepage" />
      <Route path="/SignupForm/">
        <SignupForm />
      </Route>
      <Route path='/Login'>
        <Login />
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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  border: 1px solid teal;
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 6px 6px;
  padding: 16px;
  max-width: 50%;
  background-color: white;
`;

const SignupButton = styled(Button)`
  color: huntergreen;
  border-color: huntergreen;
`;