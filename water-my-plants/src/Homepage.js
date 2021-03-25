import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import './App.css';

export default function Homepage() {


  return (
    <MainDiv>

      <StyledDiv>
        <h2>Sign Up And Keep Track Of All Your Beloved Plants!</h2>
        {/* code for possible NavLink */}
        {/* <NavLink to="/SignupForm">Sign Up Now!</NavLink> */}

        <SignupButton as="a" href="/SignupForm" style={{ textDecoration: 'none' }} >Sign Up!</SignupButton>
        <LoginButton as ="a" href="#" style={{ textDecoration: 'none' }}>Login Now!</LoginButton>
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
  color: green;
  border-color: green;
`;

const LoginButton = styled(Button)`
  color: green;
  border-color: green;
  background-color: lightgreen;  
`;