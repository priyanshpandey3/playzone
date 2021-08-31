import "./SideBar.css";

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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/profile" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
      
            {/* 
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
           
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            */}
          </ul>
        </div>
       
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User Managment</h3>
          <ul className="sidebarList">
           {/* <p>My name is Bob</p> 
           
            */}
            < Link to="/UserlistComponent" className="link">   
              <li className="sidebarListItem" >

                <PermIdentity className="sidebarIcon" />
                Users
              </li>
              </Link> 
          
           {/*
            
           */}       
            < Link to="/UserComponent" className="link">   
              <li className="sidebarListItem" Link to="/products">
                <Storefront className="sidebarIcon" />
                Roles
              </li> 
              </Link>  
              {/*         
              <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            */}
              < Link to="/ResourceComponent" className="link">   
              <li className="sidebarListItem" Link to="/products">
                <Storefront className="sidebarIcon" />
                Resources
              </li> 
              </Link>  
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Manage Tournaments</h3>
          <ul className="sidebarList">
          < Link to="/TournamentComponent" className="link">
          <li className="sidebarListItem" Link to="/products">
                <Storefront className="sidebarIcon" />
              Tournaments
            </li>
            </Link> 
            < Link to="/MatchComponent" className="link">
          <li className="sidebarListItem" Link to="/products">
                <Storefront className="sidebarIcon" />
              Matches
            </li>
            </Link> 
{/*
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Add Tournament
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
            */} 
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Manage Teams</h3>
          <ul className="sidebarList">
          < Link to="/TeamComponent" className="link">
          <li className="sidebarListItem" Link to="/products">
              <WorkOutline className="sidebarIcon" />
              Teams
            </li>
            </Link> 

            < Link to="/TeamMemberComponent" className="link">
          <li className="sidebarListItem" Link to="/products">
              <WorkOutline className="sidebarIcon" />
              Team Members
            </li>
            </Link> 
{/* 
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Add Team member
            </li>
            
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
            */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Venues</h3>
          <ul className="sidebarList">
          < Link to="/VenueComponent" className="link">
          <li className="sidebarListItem" Link to="/products">
              <WorkOutline className="sidebarIcon" />
              Manage Venues
            </li>
            </Link>
            < Link to="/AddVenue" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Add Venue
            </li>
            </Link>
            {/* 
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
            */}
          </ul>
        </div>
      </div>
    </div>
  );
}
