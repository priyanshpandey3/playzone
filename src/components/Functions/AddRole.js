import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Form, FormGroup, Input, Label, Container} from 'reactstrap'
import { Button, Col } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


 const AddRole=()=>{
     useEffect(() => {
         document.title = "Add Roles";
     }, []);

     const [role,setrole]=useState({});
    
    //formhandler function
    const handleForm=(e)=>{
        console.log(role);
        postDatatoServer(role);

        e.preventDefault();
    };
    

    //createing function to post data on server
    const postDatatoServer=(role)=>{
        axios.post(`http://playzoneauth-env.eba-xjues2uq.us-east-1.elasticbeanstalk.com/api/auth/addRole`,role).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("role added successfully");


            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong!");

            }


        )

    }
    
    return(
        <Fragment>

        <Link to="/UserComponent" className="nav-link">
        <button type="button" class="btn btn-primary float-left "> <i class="fa fa-home"></i>Back</button>
        </Link>
        <br></br>

            <h2 className="text-center my-3"> Role Details </h2>
            <Form onSubmit={handleForm}>
                <FormGroup row>
                  
                  
                    <Label sm={2}> Role Name</Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter role name" name="roleName" id="roleName" onChange={(e)=>{setrole({ ...role, roleName:e.target.value})}} />
                    </Col>
                </FormGroup>

                <FormGroup row>
             
                <Label sm={2}> Role Description</Label>
                    <Col sm={8}>
                    <Input type="textarea" placeholder="Enter role Description" name="roleDescription" id="roleDescription" onChange={(e)=>{setrole({ ...role, roleDescription:e.target.value })} }  />
                    </Col>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add</Button>

                    <Button type="reset" color="warning ml-2" >
                            Clear</Button>
                </Container>


            </Form>
        </Fragment>
     )
}

export default AddRole;