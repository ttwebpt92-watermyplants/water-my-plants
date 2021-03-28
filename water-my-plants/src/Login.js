import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap'

import { useHistory } from "react-router-dom";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  error: "",
  error_visible: false
};

export default function Login (props) {

  const [loginData, setLoginData] = useState(initialState);
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
      setLoginData({
        ...loginData,
        error_visible: true,
        error: "enter your username and password"
      })
    }
    else if (!loginData.username) {
      setLoginData({
        ...loginData,
        error_visible: true,
        error: "enter your username"
      })
    }
    else if (!loginData.password) {
      setLoginData({
        ...loginData,
        error_visible: true,
        error: "enter your password"
      })
    }
    else {
      console.log("submitted login", loginData);
      setLoginData({
        ...loginData,
        error_visible: false,
      })
      // axios.post("https://", loginData) // add endpoint for post request
      //   .then((res) => {
      //     console.log("submitted login:", res)
      //     // localStorage.setItem("token", res.data.token);
      //     //history.push("/Home");  <-- insert home page redirect
      //   })
      //   .catch((err) => {
      //     console.error("something went wrong with post request: ", err);
      //   })
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
                {loginData.error_visible ? <ErrorMsgDiv>
            <ErrorMsgP>{loginData.error}</ErrorMsgP>
            </ErrorMsgDiv> : null}
            </FormDiv>
            {/* <LoginButton type="submit">Log Me In!</LoginButton> */}

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

const LoginButton = styled.button`
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
`;
