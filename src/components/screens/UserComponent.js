import React from 'react';
import UserService from '../../services/UserService';
import { Link } from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }


    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h3 className = "text-center"> Roles List</h3>
                <Link to="/AddRole" className="nav-link">
                <button type="button" class="btn btn-success float-right font-weight-bold"> <i class="fa fa-home"></i>+ Add Role</button>
                </Link>
                <br></br>
                <br></br>
              
                <div class="row ">

                <div class="col " >
                <table className = "table table-bordered text-center">
                    <thead class="thead-dark"> 
                        <tr>

                            <th> Role Id</th>
                            <th> Role Name</th>
                            <th> Role Description</th>
                            <th> Actions</th>
                         
                           
                        </tr>

                    </thead>
                    
                    <tbody >
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.roleID}>
                                     <td> {user.roleID}</td>   
                                     <td> {user.roleName}</td>   
                                     <td> {user.roleDescription}</td>  
                                     <td>
                                     <button type="button" class="btn btn-success btn-rounded btn-sm m-0">Permissions</button>
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