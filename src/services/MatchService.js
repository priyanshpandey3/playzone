import axios from 'axios'



const USERS_REST_API_URL = 'http://playzone.us-east-1.elasticbeanstalk.com/api/matches';

class MatchService {

    getMatches(){
        return axios.get(USERS_REST_API_URL);
    }

    
}



export default new MatchService();