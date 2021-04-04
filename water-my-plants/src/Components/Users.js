import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from "react-bootstrap"
import axiosWithAuth from '../utils/axiosWithAuth';
import UserContext from "../utils/UserContext";


export default function Users() {
  const [usersArr, setUsersArr] = useState([]);
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    axiosWithAuth()
      .get('/users')
      .then(result => {
        console.log(result.data);
        setUsersArr(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault()
    console.log("id for detele: ", id);
    axiosWithAuth()
      .delete(`/users/:${id}`)
      .then(result => {
        console.log('User was deleted')
      })
      .catch(error => {
        console.log("cannot delete user")
      })
  }

  return (
    <Container fluid='sm'>
      <br/>
    <Card className='profile'>
      <h1> Users </h1>
      <div >
        {usersArr.map(one_user => (
          <div key={one_user.id} className='profile-card'>
             <Link onClick={setUser(one_user)} className='update-user' to={`/users/${one_user.id}` }>Edit</Link>
            <div>User Name: {one_user.username}</div>
            <div>Phone Number: {one_user.phoneNumber}</div>
            <div className='delete' role='button' onClick={(e) => handleDelete(e, one_user.id)}>Delete</div>
          </div>
        ))}
      </div>  
    </Card>
    </Container>
  );
}