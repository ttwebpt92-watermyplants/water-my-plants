import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


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
        .post('', newPlant)
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
            <nav className='nav'>
                <h1 className='header-logo'>WMP</h1>
                <Link to={'/'} className='signup'>Home</Link>
                <Link to={''} className='profile'>Profile</Link>
                <Link to={''} className='plantsList'>My Plants</Link>
                <Link to={''} className='logout'>Logout</Link>
            </nav>
            <h1 className='h-add-plant'>
                Add New Plant
            </h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='nickName' placeholder='Nickname' value={newPlant.nickName} onChange={handleChange} />
                <input type='text' name='species' placeholder='Species' value={newPlant.species} onChange={handleChange} />
                <input type='text' name='waterFrequency' placeholder='Water Frequency' value={newPlant.waterFrequency} onChange={handleChange} />
            </form>
            <button type='submit'>Add New Plant</button>
        </div>
    )
};

export default AddNewPlant;