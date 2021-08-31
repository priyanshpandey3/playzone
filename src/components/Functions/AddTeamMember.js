import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Form, FormGroup, Input, Label, Container} from 'reactstrap'
import { Button, Col } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';


 const AddTeamMember=()=>{
     useEffect(() => {
         document.title = "Add Team Members";
     }, []);

     const [teamMember,setTeamMember]=useState({});
    
    //formhandler function
    const handleForm=(e)=>{
        console.log(teamMember);
        postDatatoServer(teamMember);

        e.preventDefault();
    };
    

    //createing function to post data on server
    const postDatatoServer=(team)=>{
        axios.post(`${base_url}/tms`,teamMember).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Team Member added successfully");


            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong!");

            }


        )

    }
    
    return(
        <Fragment>
            <h2 className="text-center my-3"> Team Member Details </h2>
            <Form onSubmit={handleForm}>
                <FormGroup row>
                  
                
                    <Label sm={2}>Member Name</Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter Member name" name="memberName" id="memberName" onChange={(e)=>{setTeamMember({ ...teamMember, memberName:e.target.value})}} />
                    </Col>
                </FormGroup>

                <FormGroup row>
              
                    <Label sm={2}> Team Id</Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter team id" name="teamId" id="teamId" onChange={(e)=>{setTeamMember({ ...teamMember, teamId:e.target.value })} }  />
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

export default AddTeamMember;