
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { Container, Card } from 'react-bootstrap'



function UpdateUser(props) {
    // state for user
    const [user, setUser] = useState({
        id: '',
        name: '',
        job: '',
    })



    // handleChange function to control inputs
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        })
    }

    // handleSubmit function that takes an event & where put request will be made.
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .put('https://alc-water-my-plants.herokuapp.com/api/users/:id', user) // sends a post request to the server and sends data to the signin endpoint
        .then(result => {
              //props.history.push('/users')   //reroute back to users component
              console.log(result.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <MainForm>
      {/* Commented hard-coded navbar as there is a navbar component being used */}

{/* <NavBarDiv className='nav'>

                <LinkButton to={'/'} className='signup'>Home</LinkButton>
                <LinkButton to={'/signupForm'} className='signup'>Sign Up</LinkButton>
                <LinkButton to={'/users'} className='profile'>Profile</LinkButton>
                <LinkButton to={'/login'} className='login'>Login</LinkButton>
                <LinkButton to={'/plants'} className='plantsList'>My Plants</LinkButton>
                <LinkButton to={'/addNewPlant'} className='addNewPlant'>Add New Plant</LinkButton>
                <LinkButton to={'/logout'} className='logout'>Logout</LinkButton>
            </NavBarDiv> */}


            <Header className='h-update-profile'>
                Update User
            </Header>
            {/* <Container> */}
                {/* <Card> */}
            <FormDiv onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name' value={user.name} onChange={handleChange} />
                <input type='text' name='job' placeholder='Job' value={user.job} onChange={handleChange} />
                <button type='submit'>Save</button>
            </FormDiv>
            {/* </Card> */}
            {/* </Container> */}
        </MainForm>
    )
};


const MainForm = styled.form`
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 26px 28px;
    width: auto;
    background-color: #6B8F50;
    padding: 10%;
    border: 2px solid black;
`




export default UpdateUser;