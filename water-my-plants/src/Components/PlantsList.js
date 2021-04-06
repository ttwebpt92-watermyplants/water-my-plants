import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Container, Card, CarouselItem } from "react-bootstrap"


import styled from 'styled-components';
import img from '../images/flowers.jpeg';

export default function PlantsList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/plants')
      .then(response => {
        console.log(response.data);
        setPlants(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid="sm">
      <br/>
      <Card className="profile">
        <h1> My Plants </h1>
        {plants.map(plant => (
          <PlantDiv>
          <div key={plant.id} className='plant-card'>
          <div className='delete' role="button">Delete</div>
          <div>Nickname: {plant.nickname}</div>
          <div>Species: {plant.species}</div>
          <div>H2O Frequency: {plant.h2o_frequency}</div>
          <div>H2O units: {plant.h2o_unit}</div>
          <Link className='update-user' to={`/users`}>Edit</Link>
        </div>
        </PlantDiv>
        ))}
      </Card>   
      </Container>
  );

}

///// Styling /////

const PlantDiv  = styled.div`
  width:300px;
  padding-bottom:3px;
  border: 1px solid grey;
  margin:1% auto;
  display:flex;
  flex-direction: column;
`

const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
`
const LinkButton = styled(NavLink) `
    text-decoration: none;
    color:black;
`
const Box = styled.div`
  background-image: url(${img});
`