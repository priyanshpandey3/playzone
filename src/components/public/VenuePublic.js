import React from 'react';
//import UserService from '../../services/UserService';
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import VenueService from '../../services/VenueService';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from '../../api/bootapi';
import { Button } from 'reactstrap';
import { useState } from 'react';


class VenuePublic extends React.Component {

    

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    //VenueService.AVenue();

    componentDidMount(){
        VenueService.getVenues().then((response) => {
            this.setState({ users: response.data})
        });
      
    }

    render (){

       
    

/*
        const updateVenue=(venueId, venue ) => {
            axios.put(`${base_url}/venues/${venueId}`,venue.venueName="testname" ).then(
                (response)=>{
                    toast.success("Venue updated")
                },
                (error)=>{
                    toast.error("Venue not updated!! ")
                }
            )
        }

         */

        return (
            <div>
                <h3 className = "text-center"> Venue List</h3>
               
                <br></br>
                <br></br>
              
                <div class="row ">

                <div class="col " >
                <table className = "table table-bordered text-center">
                    <thead class="thead-dark"> 
                        <tr>

                            <th> Venue Id</th>
                            <th> Venue Name</th>
                            <th> Venue Address</th>                                                       
                    
                         
                           
                        </tr>

                    </thead>
                    
                    <tbody >
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.venueId}>
                                     <td> {user.venueId}</td>   
                                     <td> {user.venueName}</td>   
                                     <td> {user.venueAddress}</td>                                                                                                    
                                
                                       
                                </tr>
                            )
                        }

                    </tbody>
                  
                </table>
                </div>
                </div>

            </div>

        )
    }
}

export default VenuePublic