import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Form, FormGroup, Input, Label, Container} from 'reactstrap'
import { Button, Col } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


 const AddTournament=()=>{
     useEffect(() => {
         document.title = "Add Tournament";
     }, []);

     const [Tournament,setTournament]=useState({});
    
    //formhandler function
    const handleForm=(e)=>{
        console.log(Tournament);
        postDatatoServer(Tournament);

        e.preventDefault();
    };
    

    //createing function to post data on server
    const postDatatoServer=(Tournament)=>{
        axios.post(`${base_url}/tournaments`,Tournament).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Tournament added successfully");


            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong!");

            }


        )

    }
    
    return(

      

        <Fragment>
              <Link to="/TournamentComponent" className="nav-link">
        <button type="button" class="btn btn-primary float-left font-weight-bold"> <i class="fa fa-home"></i>Back Tournament</button>
        </Link>
        <br></br>

            <h2 className="text-center my-3"> Tournament Details </h2>
            <Form onSubmit={handleForm}>
               
                <FormGroup row>                  
                   
                    <Label sm={2}> Tournament Name</Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter Match name" name="trName" id="trName" onChange={(e)=>{setTournament({ ...Tournament, trName:e.target.value})}} />
                    </Col>
                </FormGroup>


               <FormGroup row>

                 
                 
                  <Label sm={2}> Start Date</Label>
                  <Col sm={8}>
                  <Input type="date" placeholder="Enter Start Date" name="startDate" id="startDate" onChange={(e)=>{setTournament({ ...Tournament, startDate:e.target.value})}} />
                  </Col>
              </FormGroup>

             <FormGroup row>

                 
                  <Label sm={2}> End Date</Label>
                  <Col sm={8}>
                  <Input type="date" placeholder="Enter End Date" name="endDate" id="endDate" onChange={(e)=>{setTournament({ ...Tournament, endDate:e.target.value})}} />
                  </Col>
              </FormGroup>

             <FormGroup row>                
              
                  <Label sm={2}> Application Start Date</Label>
                  <Col sm={8}>
                  <Input type="date" placeholder="Enter Application Start Date" name="applnStartDate" id="applnStartDate" onChange={(e)=>{setTournament({ ...Tournament, applnStartDate:e.target.value})}} />
                  </Col>
              </FormGroup>

             <FormGroup row>                
                
                  <Label sm={2}> Application End Date</Label>
                  <Col sm={8}>
                  <Input type="date" placeholder="Enter Application End Date" name="applnEndDate" id="applnEndDate" onChange={(e)=>{setTournament({ ...Tournament, applnEndDate:e.target.value})}} />
                  </Col>
              </FormGroup>

             <FormGroup row>
                  
           
                  <Label sm={2}>Status</Label>
                  <Col sm={8}>
                  <Input type="text" placeholder="Enter tournament status" name="status" id="status" onChange={(e)=>{setTournament({ ...Tournament, status:e.target.value})}} />
                  </Col>
              </FormGroup>

             <FormGroup row>
                  
             
                  <Label sm={2}> Info</Label>
                  <Col sm={8}>
                  <Input type="textarea" placeholder="Enter tournament Info" name="info" id="info" onChange={(e)=>{setTournament({ ...Tournament, info:e.target.value})}} />
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

export default AddTournament;