import React from 'react';
//import UserService from '../../services/UserService';
import { Link } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import TeamMemberService from '../../services/TeamMemberService';

class TeamMemberComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }


    componentDidMount(){
        TeamMemberService.getTeamMembers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h3 className = "text-center"> Team Member List</h3>
                <Link to="/AddTeamMember" className="nav-link">
                <button type="button" class="btn btn-success float-right font-weight-bold"> <i class="fa fa-home"></i>+ Add Member</button>
                </Link>
                <br></br>
                <br></br>
              
                <div class="row ">

                <div class="col " >
                <table className = "table table-bordered text-center">
                    <thead class="thead-dark"> 
                        <tr>

                            <th> Member Id</th>
                            
                            <th> Member Name</th>
                            <th> Team Id</th>



                            
                           
                            
                            <th> Actions</th>
                         
                           
                        </tr>

                    </thead>
                    
                    <tbody >
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.memberId}>
                                     <td> {user.memberId}</td>   
                                     <td> {user.memberName}</td>   
                                     <td> {user.teamId}</td>  
                                    
                                   
                                     
                                  






                                     <td>
                                     
            <button type="button" class="btn btn-primary btn-rounded btn-sm m-2">Edit </button>
            <button type="button" class="btn btn-danger btn-rounded btn-sm m-0">Delete </button>
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

export default TeamMemberComponent