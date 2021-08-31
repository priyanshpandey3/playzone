import React from 'react';
import UserService from '../../services/UserService';


import "bootstrap/dist/css/bootstrap.min.css";
import ResourceService from '../../services/ResourceService';

class ResourceComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }


    componentDidMount(){
        ResourceService.getResources().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h3 className = "text-center"> Resource List</h3>
                <button type="button" class="btn btn-primary float-right"> <i class="fa fa-home"></i> Add Resource</button>
                <br></br>
                <br></br>
              
                <div class="row ">

                <div class="col " >
                <table className = "table table-bordered text-center">
                    <thead class="thead-dark"> 
                        <tr>

                            <th> Resource Id</th>
                            <th> Resource Name</th>
                            <th> Resource Url</th>
                            <th> Actions</th>
                         
                           
                        </tr>

                    </thead>
                    
                    <tbody >
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.resourceName}</td>   
                                     <td> {user.apiUrl}</td>  
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

export default ResourceComponent