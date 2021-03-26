import React from 'react'
import { Router, NavLinks } from 'react-router-dom'
import styled, { css } from 'styled-components'

import './App.css';

import Navbar from './Navbar';
import AddNewPlant from './Components/AddNewPlant';
import PlantsList from './Components/PlantsList';
import UpdatePlant from './Components/UpdatePlant';
import Profile from './Components/Users';
import UpdateUser from './Components/UpdateUser';

function App() {


  return (
    <MainDiv>
      <HeaderDiv>Water My Plants</HeaderDiv>

      <Navbar />

      <StyledDiv>
        <h2>Sign Up And Keep Track Of All Your Beloved Plants!</h2>
        <SignupButton as="a" href="#" style={{ textDecoration: 'none' }} >Sign Up!</SignupButton>
        <p>Quick and easy sign up process and </p>
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