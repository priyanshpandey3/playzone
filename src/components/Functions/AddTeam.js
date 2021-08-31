import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Form, FormGroup, Input, Label, Container} from 'reactstrap'
import { Button, Col } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';


 const AddTeam=()=>{
     useEffect(() => {
         document.title = "Add Teams";
     }, []);

     const [team,setTeam]=useState({});
    
    //formhandler function
    const handleForm=(e)=>{
        console.log(team);
        postDatatoServer(team);

        e.preventDefault();
    };
    

    //createing function to post data on server
    const postDatatoServer=(team)=>{
        axios.post(`${base_url}/teams`,team).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Team added successfully");


            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong!");

            }


        )

    }
    
    return(
        <Fragment>
            <h2 className="text-center my-3"> Team Details </h2>
            <Form onSubmit={handleForm}>
                <FormGroup row>
                  
                
                    <Label sm={2}>Team Name</Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter team name" name="teamName" id="teamName" onChange={(e)=>{setTeam({ ...team, teamName:e.target.value})}} />
                    </Col>
                </FormGroup>

                <FormGroup row>
              
                    <Label sm={2}> Team Code</Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter team code" name="teamCode" id="teamCode" onChange={(e)=>{setTeam({ ...team, teamCode:e.target.value })} }  />
                    </Col>
                </FormGroup>

                <FormGroup row>
               
                <Label sm={2}> Status </Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter team status" name="status" id="status" onChange={(e)=>{setTeam({ ...team, status:e.target.value })} }  />
                    </Col>
                </FormGroup>

                <FormGroup row>
               
                   <Label sm={2}> Registration amount</Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter Registration fees" name="regAmount" id="regAmount" onChange={(e)=>{setTeam({ ...team, regAmount:e.target.value })} }  />
                    </Col>
                </FormGroup>

                <FormGroup row>
               
                <Label sm={2}>User id</Label>
                <Col sm={8}>
                    <Input type="text" placeholder="Enter user id" name="userId" id="userId" onChange={(e)=>{setTeam({ ...team, userId:e.target.value })} }  />
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

export default AddTeam;