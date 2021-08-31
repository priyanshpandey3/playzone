import React from 'react';
//import UserService from '../../services/UserService';


import "bootstrap/dist/css/bootstrap.min.css";
import MatchService from '../../services/MatchService';
import { Link } from 'react-router-dom';

class MatchComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }


    componentDidMount(){
        MatchService.getMatches().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h3 className = "text-center"> Matches List</h3>
                <Link to="/AddMatch" className="nav-link">
                <button type="button" class="btn btn-success float-right font-weight-bold"> <i class="fa fa-home"></i>+ Add Match</button>
                </Link>
                <br></br>
                <br></br>
              
                <div class="row ">

                <div class="col " >
                <table className = "table table-bordered text-center">
                    <thead class="thead-dark"> 
                        <tr>

                            <th> Match Id</th>                            
                            <th> Match Name</th>
                            <th> Team 1 Code</th>
                            <th> Team 2 Code</th>
                            <th> Venue Id</th>
                            <th> Tournament Id</th>
                            <th> Date Info</th>
                            <th> Status</th>








                            
                           
                            
                            <th> Actions</th>
                         
                           
                        </tr>

                    </thead>
                    
                    <tbody >
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.matchId}>
                                     <td> {user.matchId}</td>   
                                     <td> {user.matchName}</td>   
                                     <td> {user.team1Code}</td>  
                                     <td> {user.team2Code}</td>  
                                     <td> {user.venueId}</td>   
                                     <td> {user.trId}</td>   
                                     <td> {user.dateAndTime}</td>  
                                     <td> {user.status}</td>  
                                   
                                     
                                  






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

export default MatchComponent