import React, { useState, useEffect, useCallback, Component } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, Toast, toast } from 'react-toastify';


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import NewsBar from "./components/sidebar/NewsBar";


import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
//import Rolelist from "./components/Rolelist";
import Roles from "./components/Role";
import UserComponent from './components/screens/UserComponent';
import UserlistComponent from './components/screens/UserlistComponent';
import ResourceComponent from './components/screens/ResourceComponent';
import TournamentComponent from './components/screens/TournamentComponent';
import TeamComponent from './components/screens/TeamComponent';
import TeamMemberComponent from './components/screens/TeamMemberComponent';
import VenueComponent from './components/screens/VenueComponent';
import MatchComponent from './components/screens/MatchComponent';

import AddVenue from "./components/Functions/AddVenue";


import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import AddTeam from "./components/Functions/AddTeam";
import AddTeamMember from "./components/Functions/AddTeamMember";
import AddUser from "./components/Functions/AddUser";
import AddMatch from "./components/Functions/AddMatch";
import AddTournament from "./components/Functions/AddTournament";
import AddRole from "./components/Functions/AddRole";
import CarouselMain from "./components/controls/CarouselMain";
import TournamentPublic from "./components/public/TournamentPublic";
import TeamPublic from "./components/public/TeamPublic";
import TeamMemberPublic from "./components/public/TeamMemberPublic";
import VenuePublic from "./components/public/VenuePublic";
import MatchPublic from "./components/public/MatchPublic";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNewsBar, setNewsBar] = useState(true);
 


  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());  
    toast.success("logout successful");
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
     // setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      setShowSidebar(currentUser.roles.includes("ROLE_ADMIN"));
      setNewsBar(currentUser.roles.includes("ROLE_USER"));

    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      setShowSidebar(false);
      setNewsBar(true);


    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router history={history}>
     <div>
       <ToastContainer autoClose={false}/>
       
    {/* 
     
      <div style={{padding: 20}}>
      <Link to={"/"} className="navbar-brand">
      <h1>Playzone App</h1>
      </Link>
      </div>
      */}
      <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
          <h5> Playzone App</h5> 
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
           
            <li className="nav-item">
             
            <Link to={"/Tournament"} className="nav-link">   
                Tournaments
               
              </Link>
              </li>

              <li className="nav-item">
             
             <Link to={"/Match"} className="nav-link">   
                 Matches
                
               </Link>
               </li>
            
            <li className="nav-item">
              <Link to={"/Team"} className="nav-link">
                Teams
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/TeamMember"} className="nav-link">
                TeamsMember
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/Venue"} className="nav-link">
                Venues
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Rules
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Roles"} className="nav-link">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Join us
              </Link>
            </li>



            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
             

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        </div>
        </div>
        
<div >
 {
  <div class="one">
  {showSidebar && (            
              <Sidebar /> 
            )}
             {showNewsBar && (            
              <NewsBar />
            )}

            
           
  </div>
}
        <div class="two">
   
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route exact path="/UserComponent" component = {UserComponent}></Route>
            <Route exact path="/UserlistComponent" component = {UserlistComponent}></Route>
            <Route exact path="/ResourceComponent" component = {ResourceComponent}></Route>
            <Route exact path="/TournamentComponent" component = {TournamentComponent}></Route>
            <Route exact path="/TeamComponent" component = {TeamComponent}></Route>
            <Route exact path="/TeamMemberComponent" component = {TeamMemberComponent}></Route>
            <Route exact path="/VenueComponent" component = {VenueComponent}></Route>
            <Route exact path="/MatchComponent" component = {MatchComponent}></Route>

            <Route exact path="/Tournament" component = {TournamentPublic}></Route>
            <Route exact path="/Team" component = {TeamPublic}></Route>
            <Route exact path="/TeamMember" component = {TeamMemberPublic}></Route>
            <Route exact path="/Venue" component = {VenuePublic}></Route>
            <Route exact path="/Match" component = {MatchPublic}></Route>




            <Route exact path="/AddVenue" component = {AddVenue}></Route>
            <Route exact path="/AddTeam" component = {AddTeam}></Route>
            <Route exact path="/AddTeamMember" component = {AddTeamMember}></Route>
            <Route exact path="/AddUser" component = {AddUser}></Route>
            <Route exact path="/AddMatch" component = {AddMatch}></Route>
            <Route exact path="/AddTournament" component = {AddTournament}></Route>
            <Route exact path="/AddRole" component = {AddRole}></Route>

            <Route exact path="/CarouselMain" component = {CarouselMain}></Route>

          



          </Switch>
        </div>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
        
    </Router>
  );
};

export default App;
