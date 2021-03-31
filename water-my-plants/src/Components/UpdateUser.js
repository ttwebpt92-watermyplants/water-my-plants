
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';




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
        .put('https://alc-water-my-plants.herokuapp.com/user/id', user) // sends a post request to the server and sends data to the signin endpoint
        .then(result => {
              //props.history.push('/users')   //reroute back to users component
              console.log(result.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
<NavBarDiv className='nav'>

                <LinkButton to={'/Homepage'} className='signup'>Home</LinkButton>
                <LinkButton to={'/SignupForm'} className='signup'>Sign Up</LinkButton>
                <LinkButton to={'/Users'} className='profile'>Profile</LinkButton>
                <LinkButton to={'/Login'} className='login'>Login</LinkButton>
                <LinkButton to={'/PlantsList'} className='plantsList'>My Plants</LinkButton>
                <LinkButton to={'/AddNewPlant'} className='addNewPlant'>Add New Plant</LinkButton>
            </NavBarDiv>


            <Header className='h-update-profile'>
                Update User
            </Header>
            <FormDiv onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name' value={user.name} onChange={handleChange} />
                <input type='text' name='job' placeholder='Job' value={user.job} onChange={handleChange} />
                <button type='submit'>Save</button>
            </FormDiv>
        </div>
    )
};


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
    margin: 5%;
`



export default UpdateUser;