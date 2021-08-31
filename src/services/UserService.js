import axios from 'axios'



const USERS_REST_API_URL = 'http://playzoneauth-env.eba-xjues2uq.us-east-1.elasticbeanstalk.com/api/auth/getAllRole';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    
}



export default new UserService();