import axios from 'axios'



const USERS_REST_API_URL = 'http://playzone.us-east-1.elasticbeanstalk.com/api/tournaments';

class TournamentService {

    getTournaments(){
        return axios.get(USERS_REST_API_URL);
    }

    
}



export default new TournamentService();