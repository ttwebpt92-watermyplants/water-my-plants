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
