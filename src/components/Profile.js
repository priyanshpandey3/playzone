import React from "react";
import {  useState } from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import Sidebar from "./sidebar/Sidebar";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
 

  


  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div>

    
    <div className="container">
      <header className="jumbotron">
     
        <h3>  <strong> Welcome </strong>{currentUser.username} </h3>
        
      </header>
    {/* 
     <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
    */}
      <p>
        <strong>Id number:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
    </div>
  );
};

export default Profile;
