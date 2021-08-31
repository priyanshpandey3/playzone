import React from 'react';
//import UserService from '../../services/UserService';
import { Link } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import TeamMemberService from '../../services/TeamMemberService';

class TeamMemberPublic extends React.Component {

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

export default TeamMemberPublic