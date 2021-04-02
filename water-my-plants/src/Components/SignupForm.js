import axios from 'axios';
import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'

const initialState = {
    username:"",
    password:"",
    phone:"",
};

const initialErrorState = {
    error_msg:"",
    error_visible: false
}

export default function SignupForm(props) {

    const [newUser, setNewUser] = useState(initialState);
    const [errorData, setErrorData] = useState(initialErrorState);
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
        let usernameLength = newUser.username.length;
        let passwordLength = newUser.password.length;
        let phoneNumberLength = newUser.phone.length;

        if (usernameLength < 4) {
            setErrorData({
                ...errorData,
                error_visible:true,
                error_msg:"username must be at least 4 charachers"
            })
        }
        else if (passwordLength < 6) {
            setErrorData({
                ...errorData,
                error_visible:true,
                error_msg:"password must be at least 6 characters"
            })
        }
        else if (phoneNumberLength !== 10) {
            setErrorData({
                ...errorData,
                error_visible:true,
                error_msg:"invalid phone number"
            });
        }
        else {
            setErrorData({
                ...errorData,
                error_visible:false,
                error_msg:""
            });
            console.log("post obj body: ", newUser);
            axios.post("https://alc-water-my-plants.herokuapp.com/api/users/register", newUser) //<-- need endpoint for post request
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    };

    return (
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
                    />
                </label>&nbsp;&nbsp;

                <label>Phone Number&nbsp;
                    <input
                        name="phone"
                        type="text"
                        id="phone"
                        placeholder="Example:1234567890"
                        value={newUser.phone}
                        onChange={changeHandler}
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
                    />
                </label>
                {errorData.error_visible ? <ErrorMsgDiv>
            <ErrorMsgP>{errorData.error_msg}</ErrorMsgP>
            </ErrorMsgDiv> : null}
            </FormDiv>
            <Button variant="warning" size="lg" type="submit">Submit</Button>

        </MainForm>
    )
}

const ErrorMsgP = styled.p`
  font-size: 0.9rem;
  margin: 0 auto;
  padding: 0% 1%;
`;

const ErrorMsgDiv = styled.div`
  background-color: #FEC1C1;
  padding: 3% 0%;
  border-radius: 15px;
  margin:0 auto;
`;

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
