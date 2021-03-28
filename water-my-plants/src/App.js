import React from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';

import SignupForm from './SignupForm'
// import Navbar from './Navbar'
import Homepage from './Homepage'
import Login from './Login'
// import Login from './Components/Login/Login'
import AddNewPlant from './Components/AddNewPlant';
import PlantsList from './Components/PlantsList';
import UpdatePlant from './Components/UpdatePlant';
import Profile from './Components/Users';
import UpdateUser from './Components/UpdateUser';

function App() {

      return (
        <MainDiv>
          <HeaderDiv>Water My Plants</HeaderDiv>

        {/* Bootstrap styling -- Navbar light */}
          <NavBarDiv>
            <Navbar>
              <Navbar.Brand className="home-nav-btn" href="/Homepage" defaultActiveKey="/Homepage">Home</Navbar.Brand>
              <Nav  className="mr-auto">
                <Nav.Link className="nav-btn" href="SignupForm">Sign Up</Nav.Link>
                <Nav.Link className="nav-btn" href="Login">Login</Nav.Link>
              </Nav>        
            </Navbar>
          </NavBarDiv>

          {/* Nav with pills -- bootstrap */}

          {/* <Container>
            <Nav variant="pills" defaultActiveKey="/Homepage">
              <Nav.Item>
                  <Nav.Link href="/Homepage">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link href="SignupForm" eventKey="link-1">Sign Up!</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link href="Login" eventKey="link-3">Login!</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container> */}

          {/* <NavBarDiv>
            <NavButton to='/Homepage'>Home</NavButton>
            <NavButton to='/SignupForm'>Sign Up</NavButton>
            <NavButton to='/Login'>Login</NavButton>
          </NavBarDiv> */}

          <Switch>
            <Route exact path='/Homepage'>
              <Homepage/>
            </Route>
            <Route path='/SignupForm'>
              <SignupForm/>
            </Route>
            <Route path='/Login'>
              <Login/>
            </Route>
          </Switch>

        </MainDiv>
      )
}

export default App;


/// Styling ///
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color:#228B22 ;
`;
//228B22 forest green
//9ACD32 yellowgreen
//8FBC8F dark seagreen
//6B8E23 Olive drab (original color)

const HeaderDiv = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: #FFEFD5;
  color: black;
`;

const StyledDiv = styled.div`
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

const Button = styled.button`
  display: flex;
  flex-direction: row;
  border: 1px solid teal;
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 6px 6px;
  padding: 16px;
  max-width: 50%;
  background-color: white;
`;

const SignupButton = styled(Button)`
  color: huntergreen;
  border-color: huntergreen;
`;

const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 6px 8px;
  padding: 6px;
  background-color: white;
`;

const NavButton = styled(NavLink)`
  display: flex;
  flex-direction: row;
  border: 1px solid teal;
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  background-color: white;
  text-decoration: none;
  color:black;
`;