import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Form, FormGroup, Input, Label, Container} from 'reactstrap'
import { Button, Col } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import UserComponent from '../screens/UserlistComponent'


 const AddUser=()=>{
     useEffect(() => {
         document.title = "Add users";
     }, []);

     const [user,setuser]=useState({});
    
    //formhandler function
    const handleForm=(e)=>{
        console.log(user);
        postDatatoServer(user);
        UserComponent();
      

        e.preventDefault();
    };
    

    //createing function to post data on server
    const postDatatoServer=(user)=>{
        axios.post(`http://playzoneauth-env.eba-xjues2uq.us-east-1.elasticbeanstalk.com/api/auth/signup`,user).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("User added successfully");


            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong!");

            }


        )

    }
    
    return(
        <Fragment>
            <h2 className="text-center my-3"> User Details </h2>
            <Form onSubmit={handleForm}>

            <FormGroup>
                <Col sm={8}>
                    <Label> User email</Label>
                    <Input type="text" placeholder="Enter email" name="email" id="email" onChange={(e)=>{setuser({ ...user, email:e.target.value })} }  />
                    </Col>
                </FormGroup>



                <FormGroup>
                  
                    <Col sm={8}>
                    <Label> User Name</Label>
                    <Input type="text" placeholder="Enter user name" name="username" id="username" onChange={(e)=>{setuser({ ...user, username:e.target.value})}} />
                    </Col>
                </FormGroup>

                <FormGroup>
                <Col sm={8}>
                    <Label> User password</Label>
                    <Input type="password" placeholder="Enter password" name="password" id="password" onChange={(e)=>{setuser({ ...user, password:e.target.value })} }  />
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

export default AddUser;