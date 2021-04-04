
import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap'
import axiosWithAuth from '../utils/axiosWithAuth';
import UserContext from "../utils/UserContext";



function UpdateUser(props) {

    // state for user

    const {user} = useContext(UserContext);
    console.log("my user: ", user);
    const [users, setUsers] = useState(user) 

    // handleChange function to control inputs
    const handleChange = (event) => {
        setUsers({
            ...users,
            [event.target.name]: event.target.value,
        })
    }

    // handleSubmit function that takes an event & where put request will be made.
    const handleSubmit =(event) => {
        event.preventDefault();
        axiosWithAuth()
        .put(`/users/:${user.id}`, users) // sends a post request to the server and sends data to the signin endpoint
        .then(result => {
            //   props.history.push('/users')   //reroute back to users component
              console.log(result.data)
        })
        .catch(error => {
            console.log("cannot change user")
        })
    }

    return (
        <MainForm onSubmit={handleSubmit}>
            <Header className='h-update-profile'>
                Update User
            </Header>

            <FormDiv>
                <label>username&nbsp;
                <input type='text' name='username' placeholder='username' value={users.username} onChange={handleChange} />
                </label>
                <label>password&nbsp;
                <input type='password' name='password' placeholder='password' value={users.password} onChange={handleChange}/>
                </label>
                <label>phone&nbsp;
                <input type='phone' name='phone' placeholder='phone' value={users.phone} onChange={handleChange} />
                </label>
                <Button variant='warning' type="submit">Save</Button>
            </FormDiv>
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

const Header = styled.h1 `
    background-color: #FFEFD5;
`
const FormDiv = styled.div `
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
`;

export default UpdateUser;