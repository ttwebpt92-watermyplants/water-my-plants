import React from 'react'
import styled from 'styled-components'

export default function Login() {

    return (
        <LoginForm>
        <h2>Log Me In!</h2>
            <FormDiv>
                <label>Username&nbsp;
                    <input name="username" type="text" />
                </label>&nbsp;&nbsp;

                <label>Password&nbsp;
                    <input name="password" type="text"/>
                </label>
            </FormDiv>
            <LoginButton>Log Me In!</LoginButton>
        </LoginForm>
    )
}

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
