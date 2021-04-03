import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Card } from "react-bootstrap"
import axiosWithAuth from '../utils/axiosWithAuth';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/users')
      .then(result => {
        console.log(result.data);
        setUsers(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault()
    axios
      .delete('https://alc-water-my-plants.herokuapp.com/api/users/:id')
      .then(result => {
        console.log('')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Container>
    <Card className='profile'>
    <nav className='nav'>

        <Link to={'/'} className='home-nav'>Home</Link>
        <Link to={'/plants'} className='plantsList'>My Plants</Link>
        <Link to={'/addNewPlant'} className='addNewPlant'>Add New Plant</Link>
        <Link to={'/logout'} className='logout'>Logout</Link>
      </nav>
      <h1> Users </h1>
      <div >
        {users.map(user => (
          <div key={users.id} className='profile-card'>
             <Link className='update-user' to={''}>Edit</Link>
            <div>User Name: {user.username}</div>
            <div>Phone Number: {user.phoneNumber}</div>
            <div className='delete' role='button' onClick={(e) => handleDelete(e, user.id)}>Delete</div>
          </div>
        ))}
      </div>  
    </Card>
    </Container>
  );
}