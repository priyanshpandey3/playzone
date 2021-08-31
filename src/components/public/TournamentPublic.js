import React from 'react';
//import UserService from '../../services/UserService';


import "bootstrap/dist/css/bootstrap.min.css";
import TournamentService from '../../services/TournamentService';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from '../../api/bootapi';
import { Button } from 'reactstrap';

class TournamentPublic extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }


    componentDidMount(){
        TournamentService.getTournaments().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){

        const deleteTournament=(trId) => {
            axios.delete(`${base_url}/tournaments/${trId}`).then(
                (response)=>{
                    toast.success("Tournament deleted")
                },
                (error)=>{
                    toast.error("Tournament not deleted!! ")
                }
            )
        }




        return (
            <div>
                <h3 className = "text-center"> Tournament List</h3>
               
                
                <br></br>
                <br></br>
              
                <div class="row ">

                <div class="col " >
                <table className = "table table-bordered text-center">
                    <thead class="thead-dark"> 
                        <tr>

                            <th> Tournament Id</th>
                            <th> Tournament Name</th>
                            <th> Tournament Start Date</th>
                            <th> Tournament End Date</th>
                            <th> Application Start Date</th>
                            <th> Application End Date</th>
                            <th> Status</th>
                            
                        
                         
                           
                        </tr>

                    </thead>
                    
                    <tbody >
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.trId}>
                                     <td> {user.trId}</td>   
                                     <td> {user.trName}</td>   
                                     <td> {user.startDate}</td>  
                                     <td> {user.endDate}</td>   
                                     <td> {user.applnStartDate}</td>   
                                     <td> {user.applnEndDate}</td>  
                                     <td> {user.status}</td>   
                                   
                                    
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

export default TournamentPublic