import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Form, Input, Card, Container, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "../../NavBar";
import "./Login.css";

const initialState = {
  username: "",
  password: "",
  error: "",
  error_visible: false
};

const Login = (props) => {

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
    if (!loginData.password && !loginData.username) {
      setLoginData({
        ...loginData,
        error_visible: true,
        error: "please enter your username and password"
      })
    }
    else if (!loginData.username) {
      setLoginData({
        ...loginData,
        error_visible: true,
        error: "please enter your username"
      })
    }
    else if (!loginData.password) {
      setLoginData({
        ...loginData,
        error_visible: true,
        error: "please enter your password"
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
    <>
	<NavBar />
      <Container className="loginContainer">
        <Col>
        <Card className="loginCard">
          <h1 className="loginHeader">Login to your account</h1>
          <Form onSubmit={submitLogin}>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Your username"
                className="loginInput"
                onChange={changeHandler}
                value={loginData.username}
              />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="your password"
                className="loginInput"
                onChange={changeHandler}
                value={loginData.password}
              />
            <Button className="loginButton" type="submit">Login</Button>
            {loginData.error_visible ? <div className="error_container">
            <p className="error_msg">{loginData.error}</p>
            </div> : null}
          </Form>
      </Card>
      </Col>
    </Container>
    </>
  )
};

export default Login;