import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Card, Col, Button, Image } from 'react-bootstrap'
import styled, { css } from 'styled-components'

import './App.css';

export default function Homepage() {


  return (
    <MainDiv>

      {/* homepage re-done with react bootstrap styling */}

      <Container>
        <Col>
        <Card>
          <Card.Body>
            <h2>Sign Up And Keep Track Of All Your Beloved Plants!</h2>
            <Card.Text>Quick and easy sign up process!</Card.Text>
            <div><Button variant="success" href="/SignupForm">Sign Up!</Button></div><br/>
            <div><Button variant="warning" href="/Login">Login Now!</Button></div><br/>
          </Card.Body>
        </Card><br/>
        <Card>
          <h2>Set A Daily/Weekly Schedule!</h2>
          <p>Pick the daily/weekly schedule that works best for you and your plants.</p>
          <p>Avoid over-watering; select timing based on your plant's specific needs.</p>
          <Col xs={12} sm={16} md={16} className="m-auto">
            <Image className="d-block mx-auto img-fluid w-50" src="brooke-lark-plant-img.jpg" rounded fluid/><br/>
            </Col>
        </Card><br/>
        <Card>
          <h2>Search From Our Large Database Of Plants!</h2>
          <p>Lorem ipsum dolorem.</p>
          <Col xs={12} sm={16} md={16} className="m-auto">
            <Image className="d-block mx-auto img-fluid w-50" src="plant-database-img.jpeg" rounded fluid/><br/>
          </Col>
        </Card><br/>
        <Card>
        <h2>Easily Edit Your Saved Schedules!</h2>
        <p>Lorem ipsum dolorem.</p>
        <Col xs={12} sm={16} md={16} className="m-auto">
            <Image className="d-block mx-auto img-fluid w-50" src="plant-flex-schedule-img.jpeg" rounded fluid/><br/>
          </Col>        
        </Card>
        </Col>
      </Container>


      {/* Styling with styled components */}
      {/* <StyledDiv> */}
        {/* <h2>Sign Up And Keep Track Of All Your Beloved Plants!</h2> */}
        {/* code for possible NavLink */}
        {/* <NavLink to="/SignupForm">Sign Up Now!</NavLink> */}

        {/* <SignupButton as="a" href="/SignupForm" style={{ textDecoration: 'none' }} >Sign Up!</SignupButton>
        <LoginButton as ="a" href="/Login" style={{ textDecoration: 'none' }}>Login Now!</LoginButton>
        <p>Quick and easy sign up process!</p>
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
      </StyledDiv> */}

    </MainDiv>

    
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  // border: 1px solid rgb(210, 210, 210);
  // box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 6px;
  margin: 16px 8px;
  padding: 16px;
  // background-color: white;
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

const SignupButton = styled.button`
  display: flex;
  flex-direction: row;
  border: 1px solid teal;
  border-radius: 6px;
  color: green;
  border-color: green;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 6px 6px;
  padding: 16px;
  max-width: 50%;
  background-color: lightgreen;
`;


const LoginButton = styled.button`
  color: green;
  border-color: green;
  background-color: lightgreen;  
  display: flex;
  flex-direction: row;
  border: 1px solid teal;
  border-radius: 6px;
  color: green;
  border-color: green;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 6px 6px;
  padding: 16px;
  max-width: 50%;
  background-color: white;
`;