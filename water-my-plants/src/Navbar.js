import React from 'react'
import styled from 'styled-components'
import { Container, Nav, Navbar, Card } from 'react-bootstrap';

export default function NavBar() {


    return (
        <NavBarContainer>
            <NavBarDiv>
                <Navbar>
                <Navbar.Brand className="home-nav-btn" href="/Users" defaultActiveKey="/Users">Profile</Navbar.Brand>
                <Nav  className="mr-auto">
                    <Nav.Link className="nav-btn" href="PlantsList">My Plants</Nav.Link>
                    <Nav.Link className="nav-btn" href="AddNewPlant">Add Plants</Nav.Link>
                    <Nav.Link className="nav-btn" href="#">Log Out</Nav.Link>
                    <Nav.Link className="nav-btn" href="#">Help</Nav.Link>
                </Nav>        
                </Navbar>
            </NavBarDiv>
        </NavBarContainer>

    )
}

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-text: center;
  justify-content: center;
`;

const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  margin: 6px 8px;
  padding: 10px 40px;
  background-color: white;
  max-width: 85%;
`;



