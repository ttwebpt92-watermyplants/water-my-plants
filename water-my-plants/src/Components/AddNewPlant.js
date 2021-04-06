import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap'
import img from '../images/flowers.jpeg';



function AddNewPlant(props) {
  // state for data
  const [newPlant, setNewPlant] = useState({
      nickname: '',
      species: '',
      h2o_frequency: 0,
      h2o_unit: ""
  })

  const history = useHistory();

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
            console.log("body of new plant: ", newPlant);
            console.log("success on adding new plant");
            console.log(result.data);
            history.push("/PlantList");
        })
        .catch(err => {
            console.log(err)
        })
      }

      return (
        <Container fluid="sm">

            <Box>
            <Header className='h-add-plant'>
                Add New Plant
            </Header>
            <FormDiv onSubmit={handleSubmit}>
                <input type='text' name='nickname' placeholder='nickname' value={newPlant.nickname} onChange={handleChange} />
                <input type='text' name='species' placeholder='species' value={newPlant.species} onChange={handleChange} />
                <input type='number' name='h2o_frequency' placeholder='Water Frequency' value={newPlant.h2o_frequency} onChange={handleChange} />
                <input type='text' name='h2o_unit' placeholder='water unit' value={newPlant.h2o_unit} onChange={handleChange} />
                <Button variant="warning" size="lg" type="submit">Add new plant</Button>
            </FormDiv>
            </Box>
        </Container>
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
const Header = styled.h1 `
    background-color: #FFEFD5;
`
const FormDiv = styled.form `
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    background-color: #6B8F50;
    border: 2px solid black;
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 26px 28px;
    width: auto;
    padding: 10%;
`
const Box = styled.div`
    background-image: url(${img});
`
export default AddNewPlant;