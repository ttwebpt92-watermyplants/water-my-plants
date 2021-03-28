import axios from 'axios';
import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const initialState = {
    username:"",
    password:"",
    phone_number:"",
    error_msg:"",
    error_visible: false
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
        let usernameLength = newUser.username.length;
        let passwordLength = newUser.password.length;
        let phoneNumberLength = newUser.phone_number.length;

        if (usernameLength < 4) {
            setNewUser({
                ...newUser,
                error_visible:true,
                error_msg:"username must be at least 4 charachers"
            });
        }
        else if (passwordLength < 6) {
            setNewUser({
                ...newUser,
                error_visible:true,
                error_msg:"password must be at least 6 characters"
            });
        }
        else if (phoneNumberLength !== 10) {
            setNewUser({
                ...newUser,
                error_visible:true,
                error_msg:"invalid phone number"
            });
        }
        else {
            setNewUser({
                ...newUser,
                error_visible:false,
                error_msg: ""
            });
            console.log("success: ", newUser);
        }
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
                        name="phone_number"
                        type="text"
                        id="phone_number"
                        placeholder="Example:1234567890"
                        value={newUser.phone_number}
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
                {newUser.error_visible ? <ErrorMsgDiv>
            <ErrorMsgP>{newUser.error_msg}</ErrorMsgP>
            </ErrorMsgDiv> : null}
            </FormDiv>
            <SubmitButton type='submit'>Submit!</SubmitButton>
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