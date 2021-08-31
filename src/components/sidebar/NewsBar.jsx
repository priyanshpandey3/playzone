import "./NewsBar.css";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
//import React from 'react'
import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
//import UserComponent from './components/screens/UserComponent';

export default function NewsBar() {
  return (
    <div className="newsbar">
      <div className="newssbarWrapper">
        <div className="newsbarMenu">
        <h4>Latest News </h4>
         
        
          
          <hr />
          <h6>Misbah-ul-Haq tests positive for Covid-19</h6>
          <hr />
          <h6>BCB AGM to be held on August 26</h6>
          <hr />
          <h6>Rajasthan Royals sign Shamsi as replacement for Tye</h6>
          <hr />
          <h6>Stuart Barnes to step down as Ireland's assistant coach</h6>



         
        </div>
       
       
     
      
       
      </div>
    </div>
  );
}
