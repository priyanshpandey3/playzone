import React from 'react';
import axios from 'axios'
import { Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const USERS_REST_API_URL = 'http://playzone.us-east-1.elasticbeanstalk.com/api/venues';


const AddVenue = () => {
    return (
        <Fragment>
            <Form>
                <FormGroup>
                    <label for="venueName">Venue Name</label>
                    <Input type="text" placeholder="Enter venue name" name="vname" id="venueName" />


                </FormGroup>


            </Form>
        </Fragment>
    )
}




class VenueService {

    getVenues(){
        return axios.get(USERS_REST_API_URL);
    }

    AVenue(){
        return AddVenue;
    }

  


    
}



export default new VenueService();