import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import img from '../images/flowers.jpeg';


function AddNewPlant(props) {
    // state for data
    const [newPlant, setNewPlant] = useState({
        nickName: '',
        species: '',
        h2oFrequency: '',
    })

    // handleChange function to control inputs
    const handleChange = (event) => {
        setNewPlant({
            ...newPlant,
            [event.target.name]: event.target.value,
        })
    }

    // handleSubmit function that takes an event & where post request will be made.
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .post('https://alc-water-my-plants.herokuapp.com/api/plants', newPlant)
        .then(result => {
            console.log(result.data)
            localStorage.setItem('token', result.data.token) 
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <NavBarDiv className='nav'>

                <LinkButton to={'/'} className='signup'>Home</LinkButton>
                <Link to={'/users'} className='profile'>Profile</Link>
                <Link to={'/plantsList'} className='plantsList'>My Plants</Link>
                <Link to={'/logout'} className='logout'>Logout</Link>
            </NavBarDiv>

            <Box>
            <Header className='h-add-plant'>
                Add New Plant
            </Header>
            <FormDiv onSubmit={handleSubmit}>
                <input type='text' name='nickName' placeholder='Nickname' value={newPlant.nickName} onChange={handleChange} />
                <input type='text' name='species' placeholder='Species' value={newPlant.species} onChange={handleChange} />
                <input type='text' name='waterFrequency' placeholder='Water Frequency' value={newPlant.waterFrequency} onChange={handleChange} />
            </FormDiv>
            <button type='submit'>Add New Plant</button>
            </Box>
        </div>
    )
};


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
const Header = styled.h1 `
    background-color: #FFEFD5;
`
const FormDiv = styled.form `
    background-color: #6B8F50;
    padding: 10%;
    border: 2px solid black;
    margin: 17%;
`
const Box = styled.div`
    background-image: url(${img});
`
export default AddNewPlant;