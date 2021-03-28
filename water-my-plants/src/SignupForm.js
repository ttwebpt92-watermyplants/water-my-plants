import axios from 'axios';
import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const initialState = {
    name:"",
    password:"",
    phone_number:"",
    error_msg:""
};

export default function SignupForm(props) {

    const [ newUser, setNewUser] = useState(initialState);
    const history = useHistory();

    const changeHandler = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = (event) => {
        event.preventDefault();
        console.log("form submitted: ", newUser);
    //     axios.post("http://", newUser) <-- need endpoint for post request
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // };
    }

    return (
        //placeholder code for sign up form
        <MainForm onSubmit={submitForm}>
        <h2>Sign Up and Get Started!</h2>
            <FormDiv>
                <label>Username&nbsp;
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="signUpInput"
                        placeholder="Example: help_me"
                        value={newUser.username}
                        onChange={changeHandler}
                        required
                    />
                </label>&nbsp;&nbsp;

                <label>Phone Number&nbsp;
                    <input
                        name="phonenumber"
                        type="text"
                        id="phonenumber"
                        placeholder="Example:1234567890"
                        value={newUser.phone_number}
                        onChange={changeHandler}
                        required
                    />
                </label>&nbsp;&nbsp;

                <label>Password&nbsp;
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Example:lessThen3"
                        value={newUser.password}
                        onChange={changeHandler}
                        required
                    />
                </label>
            </FormDiv>
            <SubmitButton type='submit'>Submit!</SubmitButton>
        </MainForm>
    )
}

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

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  justify-content: space-between;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 26px;
  background-color: white;
`;

const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  border: 1px solid teal;
  border-radius: 6px;
  border-color: huntergreen;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 6px 6px;
  padding: 16px;
  max-width: 50%;
  background-color: #75ec73;
  color: bold green;
  `