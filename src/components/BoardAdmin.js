import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";


import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
   
<div className="container">
     <div>
      <header className="jumbotron">
        <h1>Welcome admin</h1>
        <h3>Here is your admin content</h3>
      </header>
      </div>
     
      </div>
    
      
      

   
   
  );
};

export default BoardAdmin;
