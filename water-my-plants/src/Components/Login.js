import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from '../utils/UserContext';

const initialState = {
  username: "",
  password: ""
};

const initialErrorState = {
  error: "",
  error_visible: false
}

export default function Login (props) {

  const [loginData, setLoginData] = useState(initialState);
  const [errorData, setErrorData] = useState(initialErrorState);
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const changeHandler = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const submitLogin = async (event) => {
    event.preventDefault();
    console.log("submit");
    if (!loginData.password && !loginData.username) {
      setErrorData({
        ...errorData,
        error_visible: true,
        error: "enter your username and password"
      })
    }
    else if (!loginData.username) {
      setErrorData({
        ...errorData,
        error_visible: true,
        error: "enter your username"
      })
    }
    else if (!loginData.password) {
      setErrorData({
        ...errorData,
        error_visible: true,
        error: "enter your password"
      })
    }
    else {
      console.log("submitted , post request going next", loginData);
      setErrorData({
        ...errorData,
        error_visible: false,
        error: ""
      })
      axios.post("https://alc-water-my-plants.herokuapp.com/api/users/login", loginData)
        .then((res) => {
          console.log("submitted login:", res)
          if ((!localStorage.getItem("username")) || (localStorage.getItem("username") !== loginData.username)) {
            localStorage.setItem("username", loginData.username);
            setUser({
              username: loginData.username
            });
            history.push("/plants");
            // console.log("username was same as before or not created yet")
          }
          else {
            history.push("/plants");
            // console.log("username wasnt found in localstorage, setted up new one");
          }
        })
        .catch((err) => {
          console.error("something went wrong with post request: ", err);
        })
      }

  };

    return (
        <LoginForm onSubmit={submitLogin}>
        <h2>Log Me In!</h2>
            <FormDiv>
                <label>Username&nbsp;
                    <input
                      name="username"
                      type="text"
                      id="username"
                      placeholder="Your username"
                      onChange={changeHandler}
                      value={loginData.username}
                    /> 
                </label>&nbsp;&nbsp;

                <label>Password&nbsp;
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="your password"
                      onChange={changeHandler}
                      value={loginData.password}
                    />
                </label>
                {errorData.error_visible ? <ErrorMsgDiv>
            <ErrorMsgP>{errorData.error}</ErrorMsgP>
            </ErrorMsgDiv> : null}
            </FormDiv>

            {/* Added login button with react bootstrap styling */}
            <Button variant="warning" size="lg" type="submit">Log Me In!</Button>
        </LoginForm>
    )
}

const ErrorMsgP = styled.p`
  font-size: 0.9rem;
  margin: 0 auto;
`;

const ErrorMsgDiv = styled.div`
  background-color: #FEC1C1;
  margin-top: 3%;
  padding: 3% 0%;
  border-radius: 15px;
`;

const LoginForm = styled.form`
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
  justify-content: space-between;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 26px;
  background-color: white;
`;
