import React from 'react'
import styled from 'styled-components'

export default function Navbar() {


    return (
        <NavBarDiv>
            {/* commented for now, pending further discussion on what else is going in the App nav bar once user is logged in  */}
            <NavButton>Home</NavButton>
            {/* <NavButton>Sign Up</NavButton>
            <NavButton>Login</NavButton> */}
            <NavButton>My Plants</NavButton>
            <NavButton>Add Plants</NavButton>
            <NavButton>Profile</NavButton>
            <NavButton>Log Out</NavButton>
            <NavButton>Help</NavButton>
        </NavBarDiv>
    )
}

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
`;

const NavButton = styled.button`
  display: flex;
  flex-direction: row;
  border: 1px solid teal;
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
`;

