import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import cricket from './img/cricket.jpg';
import CarouselMain from "./controls/CarouselMain";


const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
        {/* 
      <div className = "head-text">
    <div> <img src={cricket} class="img-fluid" alt="Responsive image" /> </div>
    <div class='text-on-image'>
             <h3> Welcome to my Blog </h3>
             <p> FREEEEDOM </p>
          </div>
          </div>
  
    <div class="row">
     <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/lights.jpg">
        <img src={cricket} alt="Lights" />
       
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/nature.jpg">
        <img src={cricket} alt="Nature"  />
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/fjords.jpg">
        <img src="/w3images/fjords.jpg" alt="Fjords"/>
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
</div>

*/}
<div>
{  CarouselMain()}
<br></br>
</div>
    
    
    <div className="container col-12" >
      <header className="jumbotron" align="center">
      <h2>Welcome to Playzone</h2>   
      <br></br>
      <h4> One stop tournament management system</h4>
 
        <h5>{content}</h5>
       
      </header>
    </div>
    </div>
  );
};

export default Home;
