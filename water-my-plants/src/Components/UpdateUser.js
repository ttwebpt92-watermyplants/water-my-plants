
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




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
        .put('', user) // sends a post request to the server and sends data to the signin endpoint
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

            <h1 className='h-update-profile'>
                Update User
            </h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name' value={user.name} onChange={handleChange} />
                <input type='text' name='job' placeholder='Job' value={user.job} onChange={handleChange} />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
};

export default UpdateUser;