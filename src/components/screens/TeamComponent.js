import React from 'react';
//import UserService from '../../services/UserService';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';


import "bootstrap/dist/css/bootstrap.min.css";
import TeamService from '../../services/TeamService';

class TeamComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }


    componentDidMount(){
        TeamService.getTeams().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        const deleteTeam=(teamId) => {
            axios.delete(`${base_url}/teams/${teamId}`).then(
                (response)=>{
                    toast.warn("Team Deleted!")
                },
                (error)=>{
                    toast.error("Team not deleted!! ")
                }
            )
        }





        return (
            <div>
                <h3 className = "text-center"> Teams List</h3>
                <Link to="/AddTeam" className="nav-link">
                <button type="button" class="btn btn-success float-right font-weight-bold"> <i class="fa fa-home"></i> + Add Team</button>
                </Link>
                <br></br>
                <br></br>
              
                <div class="row ">

                <div class="col " >
                <table className = "table table-bordered text-center">
                    <thead class="thead-dark"> 
                        <tr>

                            <th> Team Id</th>
                            <th> Team Name</th>
                            <th> User Id</th>
                            <th> Status</th>
                            <th> Team Code</th>
                            <th>Registration Amount</th>
                            


                            
                           
                            
                            <th> Actions</th>
                         
                           
                        </tr>

                    </thead>
                    
                    <tbody >
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.teamId}>
                                     <td> {user.teamId}</td>   
                                     <td> {user.teamName}</td>   
                                     <td> {user.userId}</td>  
                                     <td> {user.status}</td>   
                                     <td> {user.teamCode}</td>   
                                     <td> {user.regAmount}</td>  
                                     
                                     
                                  






                                     <td>
                                     
            <button type="button" class="btn btn-primary btn-rounded btn-sm m-2">Edit </button>

            <Button color="danger ml-2" size="sm" onClick={()=>{deleteTeam(user.teamId);
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

export default TeamComponent