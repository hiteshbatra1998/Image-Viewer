import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID b2af035ab9a9cd4422fb6f612a85ddff1eb0895d3ebbfcdd98d2d113c4fe6360'
    }
});