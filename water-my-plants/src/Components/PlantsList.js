import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
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
    <div className='plants-list'>
<NavBarDiv className='nav'>
        <Link to={'/'} className='signup'>Home</Link>
        <Link to={'/users'} className='profile'>Profile</Link>
        <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
        <Link to={'/logout'} className='logout'>Logout</Link>
            </NavBarDiv>
      <h1> My Plants </h1>
      <Box>
        {plants.map(plant => (
          <div key={plant.id} className='plant-card'>
          <div className='delete'>Delete</div>
          <div>Nickname: {plant.nickname}</div>
          <div>Species: {plant.species}</div>
          <div>H2O Frequency: {plant.h2oFrequency}</div>
          <Link className='update-user' to={``}>Edit</Link>
        </div>
        ))}
      </Box>

    </div>
  );

}

///// Styling /////
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
  padding: 50%;
`