import React from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Nav, Navbar, Card, Col } from 'react-bootstrap';
import './App.css';

import SignupForm from './Components/SignupForm'
// Navbar component needs to be renamed slightly so as not to conflict with bootstrap
// identifier
import NavBar from './Navbar'
import Homepage from './Homepage'
import Login from './Components/Login'
import AddNewPlant from './Components/AddNewPlant';
import PlantsList from './Components/PlantsList';
import UpdatePlant from './Components/UpdatePlant';
import Profile from './Components/Users';
import UpdateUser from './Components/UpdateUser';

function App() {

      return (
        <MainDiv>
          <Container>
          <Card >
            <h1 className="h1-main">Remember The Plants!</h1>
            <h4 className="text-muted">A Scheduling App for Plant Care</h4>
          </Card>
          </Container>
          <NavBarDiv>
            <Navbar>
              <Navbar.Brand className="home-nav-btn" href="/Homepage" defaultactivekey="/Homepage">Home</Navbar.Brand>
              <Nav  className="mr-auto">
                <Nav.Link className="nav-btn" href="SignupForm">Sign Up</Nav.Link>
                <Nav.Link className="nav-btn" href="Login">Login</Nav.Link>
              </Nav>        
            </Navbar>
          </NavBarDiv>

          {/* Inner-App NavBar that is displayed after a user successfully logs in */}
          <div> 
            { 
              localStorage.getItem('token') &&            
              // this.state.loggedIn && 
              <div>
              <NavBar />
              </div>
          }     
          </div>

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
  // border: 1px solid rgb(210, 210, 210);
  // box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 6px;
  margin: 16px 8px;
  padding: 16px;
  // background-color: #5ba35b;
`;
// color selections for styled components
//5ba35b current green color
//228B22 forest green
//9ACD32 yellowgreen
//8FBC8F dark seagreen
//6B8E23 Olive drab (original color)

// Background color, border and box-shadow has been commented on MainDiv and NavBarDiv, and background color has been commented on HeaderDiv

const HeaderDiv = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 16px 8px;
  padding: 16px;
  // background-color: #FFEFD5;
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
  // border: 1px solid rgb(210, 210, 210);
  // box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 6px;
  margin: 6px 8px;
  padding: 0px;
  // background-color: white;
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