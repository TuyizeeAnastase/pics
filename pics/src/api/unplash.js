import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID oWEUKG4lAvDyJnSeUSw96NxrJ3Rw-KCyzdN_63C5N7E'
    }
     });

