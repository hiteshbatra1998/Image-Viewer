import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID Your Id'  // put your ap key to run the project
    }
});
