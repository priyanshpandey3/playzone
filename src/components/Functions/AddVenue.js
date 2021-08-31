 import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Form, FormGroup, Input, Label, Container} from 'reactstrap'
import { Button, Col } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


 const AddVenue=()=>{
     useEffect(() => {
         document.title = "Add Venues";
     }, []);

     const [venue,setVenue]=useState({});
    
    //formhandler function
    const handleForm=(e)=>{
        console.log(venue);
        postDatatoServer(venue);

        e.preventDefault();
    };
    

    //createing function to post data on server
    const postDatatoServer=(venue)=>{
        axios.post(`${base_url}/venues`,venue).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Venue added successfully");


            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong!");

            }


        )

    }
    
    return(
        <Fragment>

        <Link to="/VenueComponent" className="nav-link">
        <button type="button" class="btn btn-primary float-left "> <i class="fa fa-home"></i>Back Venue</button>
        </Link>
        <br></br>

            <h2 className="text-center my-3"> Venue Details </h2>
            <Form onSubmit={handleForm}>
                <FormGroup row>
                  
                  
                    <Label sm={2}> Venue Name</Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter venue name" name="venueName" id="venueName" onChange={(e)=>{setVenue({ ...venue, venueName:e.target.value})}} />
                    </Col>
                </FormGroup>

                <FormGroup row>
             
                <Label sm={2}> Venue City</Label>
                    <Col sm={8}>
                    <Input type="text" placeholder="Enter venue city name" name="venueCity" id="venueAddress" onChange={(e)=>{setVenue({ ...venue, venueAddress:e.target.value })} }  />
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

export default AddVenue;