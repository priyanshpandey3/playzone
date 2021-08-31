import React from 'react';
import UserService from '../../services/UserService';


import "bootstrap/dist/css/bootstrap.min.css";
import ResourceService from '../../services/ResourceService';

class ResourcePublic
 extends React.Component {

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

export default ResourcePublic
