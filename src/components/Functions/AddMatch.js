import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Form, FormGroup, Input, Label, Container} from 'reactstrap'
import { Button, Col } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


 const AddMatch=()=>{
     useEffect(() => {
         document.title = "Add Match";
     }, []);

     const [match,setmatch]=useState({});
    
    //formhandler function
    const handleForm=(e)=>{
        console.log(match);
        postDatatoServer(match);

        e.preventDefault();
    };
    

    //createing function to post data on server
    const postDatatoServer=(match)=>{
        axios.post(`${base_url}/matches`,match).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("match added successfully");


            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong!");

            }


        )

    }
    
    return(

        
        <Fragment>

        <Link to="/MatchComponent" className="nav-link">
        <button type="button" class="btn btn-primary float-left "> <i class="fa fa-home"></i>Back</button>
        </Link>
        <br></br>


            <h2 className="text-center my-3"> Match Details </h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                  
                    <Col sm={8}>
                    <Label> Match Name</Label>
                    <Input type="text" placeholder="Enter Match name" name="matchName" id="matchName" onChange={(e)=>{setmatch({ ...match, matchName:e.target.value})}} />
                    </Col>
                </FormGroup>

                <FormGroup>
                <Col sm={8}>
                    <Label> Team 1 Code</Label>
                    <Input type="text" placeholder="Enter team 1 code" name="team1Code" id="team1Code" onChange={(e)=>{setmatch({ ...match, team1Code:e.target.value })} }  />
                    </Col>
                </FormGroup>

                <FormGroup>
                <Col sm={8}>
                    <Label> Team 2 Code</Label>
                    <Input type="text" placeholder="Enter team 2 code" name="team2Code" id="team2Code" onChange={(e)=>{setmatch({ ...match, team2Code:e.target.value })} }  />
                    </Col>
                </FormGroup>

                <FormGroup>
                  
                  <Col sm={8}>
                  <Label> Venue id</Label>
                  <Input type="text" placeholder="Enter Venue id" name="venueId" id="venueId" onChange={(e)=>{setmatch({ ...match, venueId:e.target.value})}} />
                  </Col>
              </FormGroup>

              <FormGroup>
                  
                  <Col sm={8}>
                  <Label> Tournament id</Label>
                  <Input type="text" placeholder="Enter Tournament id" name="trId" id="trId" onChange={(e)=>{setmatch({ ...match, trId:e.target.value})}} />
                  </Col>
              </FormGroup>
              <FormGroup>
                  
                  <Col sm={8}>
                  <Label> Date and Time</Label>
                  <Input type="datetime" placeholder="Enter Date and Time" name="dateAndTime" id="dateAndTime" onChange={(e)=>{setmatch({ ...match, dateAndTime:e.target.value})}} />
                  </Col>
              </FormGroup>

              <FormGroup>
                  
                  <Col sm={8}>
                  <Label> status</Label>
                  <Input type="text" placeholder="Enter tournament status" name="status" id="status" onChange={(e)=>{setmatch({ ...match, status:e.target.value})}} />
                  </Col>
              </FormGroup>
              <FormGroup>
                  
                  <Col sm={8}>
                  <Label> Match Info</Label>
                  <Input type="textarea" placeholder="Enter match Info" name="matchInfo" id="matchInfo" onChange={(e)=>{setmatch({ ...match, matchInfo:e.target.value})}} />
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

export default AddMatch;