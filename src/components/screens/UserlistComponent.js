import React from 'react';
import UserListService from '../../services/UserListService';
import { Link } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }


    componentDidMount(){
        UserListService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h3 className = "text-center"> Users List</h3>
                <Link to="/AddUser" className="nav-link">
                <button type="button" class="btn btn-success float-right font-weight-bold"> <i class="fa fa-home"></i>+ Add User</button>
                </Link>
                <br></br>
                <br></br>
              
                <div class="row ">

                <div class="col " >
                <table className = "table table-bordered text-center">
                    <thead class="thead-dark"> 
                        <tr>

                            <th> User Id</th>
                            <th> User Name</th>
                            <th> User Email</th>
                           
                            <th>Actions</th>

                         
                           
                        </tr>

                    </thead>
                    
                    <tbody >
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.username}</td>   
                                     <td> {user.email}</td>                              
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

export default UserComponent