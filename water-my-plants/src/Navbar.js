import React from 'react'
import styled from 'styled-components'
import { Container, Nav, Navbar, Card, NavDropdown } from 'react-bootstrap';
import { Switch, Link, NavLink, Route } from 'react-router-dom'

import PlantsList from './Components/PlantsList';
import AddNewPlant from './Components/AddNewPlant';
import UpdatePlant from './Components/UpdatePlant';
import Profile from './Components/Users';
import UpdateUser from './Components/UpdateUser';
import Logout from './Components/Logout'

export default function NavBar() {


    return (
        <NavBarContainer>
            <Container fluid>

            {/* <NavBarDiv> */}
                <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                    <Navbar.Brand className="home-nav-btn" href="/UpdateUser" defaultactivekey="/UpdateUser">Update Profile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav  className="mr-auto">
                            <Nav.Link className="nav-btn" href="/Users">Users</Nav.Link>
                            <Nav.Link className="nav-btn" href="/PlantsList">My Plants</Nav.Link>
                            <Nav.Link className="nav-btn" href="/AddNewPlant">Add Plants</Nav.Link>
                            <Nav.Link className="nav-btn" href="/Logout">Log Out</Nav.Link>
                            <Nav.Link className="nav-btn" href="#">Help</Nav.Link>
                        </Nav>  
                    </Navbar.Collapse>     
                </Navbar>
            {/* </NavBarDiv> */}
            </Container>

            <Switch>
            <Route exact path="/UpdateUser">
              <UpdateUser/>
            </Route>
            <Route exact path='/PlantsList'>
              <PlantsList/>
            </Route>
            <Route exact path='/AddNewPlant'>
              <AddNewPlant/>
            </Route>
            <Route path='/Logout'>
              <Logout/>
            </Route>
            <Route exact path="/Users">
                <Profile/>
            </Route>
          </Switch>
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



