import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function UpdatePlant(props) {
    // state for data
    const [plant, setPlant] = useState({
        id: '',
        nickName: '',
        species: '',
        waterFrequency: '',
    })

    useEffect(() => {
        axiosWithAuth()
        .get(``)
        .then(result => {
            setPlant(result.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [props.match.params.id])

    const handleChange = (event) => {
        setPlant({
            ...plant,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axiosWithAuth()
        .put(``, plant)
        .then(result => {
            props.history.push('')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>

            <p>
                Update Plant
            </p>
            <form onSubmit={handleSubmit}> 
                <input type='text' name='nickName' placeholder='Nickname' value={plant.nickName} onChange={handleChange} />
                <input type='text' name='species' placeholder='Species' value={plant.species} onChange={handleChange}  />
                <input type='text' name='waterFrequency' placeholder='Water Frequency' value={plant.waterFrequency} onChange={handleChange} />
                <button type='submit'>Save</button>
            </form>    
        </div>
    )
};

export default UpdatePlant;