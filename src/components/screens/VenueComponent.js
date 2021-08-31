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


class VenueComponent extends React.Component {

    

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

       
    

        const deleteVenue=(venueId) => {
            axios.delete(`${base_url}/venues/${venueId}`).then(
                (response)=>{
                    toast.success("Venue deleted")
                },
                (error)=>{
                    toast.error("Venue not deleted!! ")
                }
            )
        }
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
                <Link to="/AddVenue" className="nav-link">
                <button type="button" class="btn btn-success float-right font-weight-bold"> <i class="fa fa-home"></i>+ Add Venue</button>
                </Link>
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
                            <th> Actions</th>
                         
                           
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

                                     <td>
                                     
          
            <Button color="primary" size="sm"  >
               Edit

            </Button>



            <Button color="danger ml-2" size="sm" onClick={()=>{deleteVenue(user.venueId);
            }} >
                Delete

            </Button>


          </td>
                                       
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

export default VenueComponent