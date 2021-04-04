import React, { useState } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Nav, Navbar, Card } from 'react-bootstrap';
import './App.css';
import { useHistory } from "react-router-dom";

import SignupForm from './Components/SignupForm'
import NavBar from './Navbar'
import Homepage from './Homepage'
import Login from './Components/Login'
import AddNewPlant from './Components/AddNewPlant';
import PlantsList from './Components/PlantsList';
import UpdatePlant from './Components/UpdatePlant';
import Profile from './Components/Users';
import UpdateUser from './Components/UpdateUser';
import Logout from './Components/Logout';
import { UserProvider } from './utils/UserContext';

function App() {

  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("username");
    history.push('/login');
    // window.location.reload(false)
    // setTimeout(
    //   function(){
    //     history.push('/login');
    //   }, 5)
    // axios.get("https://alc-water-my-plants.herokuapp.com/api/users/logout")// axios call for ending session gives me 500 error
    //   .then((res) => {
    //     console.log("session quited successfully")
    //   })
    //   .catch((err) => {
    //     console.log("cannot finish user's session")
    //   })
  }

  const [user, setUser] = useState([{
    username: localStorage.getItem('username'),
    user_id: localStorage.getItem("user_id")
  }]);

      return (
        <UserProvider value={{user, setUser}}>
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
                {(localStorage.getItem('username') ? <Nav.Link className="nav-btn" onClick={logout}>Logout</Nav.Link> : null)}
              </Nav>        
            </Navbar>
          </NavBarDiv>

          {/* Inner-App NavBar that is displayed after a user successfully logs in */}
          <div> 
            { 
              localStorage.getItem('username') &&       
              <div>
              <NavBar />
              </div>
          }     
          </div>

          <Switch>
          <Route exact path='/addNewPlant' component={AddNewPlant}>
          <AddNewPlant />
        </Route>
        <Route exact path='/plants/:id' component={UpdatePlant}>
          <UpdatePlant />
        </Route>
        <Route exact path='/plants' component={PlantsList}>
          <PlantsList />
        </Route>
        <Route exact path='/users/:id' component={UpdateUser}>
          <UpdateUser />
        </Route>
        <Route exact path='/users' component={Profile}>
          <Profile />
        </Route>
        <Route exact path='Logout' component={Logout}>
          <Logout />
        </Route>
        <Route path='/Login' component={Login}>
          <Login />
        </Route>
        <Route exact path='/SignupForm' component={AddNewPlant}>
          <SignupForm />
        </Route>
        <Route exact path='/Homepage' component={Homepage}>
          <Homepage />
        </Route>
          </Switch>


        </MainDiv>
       </UserProvider>
      )
}

export default App;


/// Styling ///
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 6px;
  margin: 16px 8px;
  padding: 16px;
`;

const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 6px;
  margin: 6px 8px;
  padding: 0px;
`;
