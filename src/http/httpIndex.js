import axios from 'axios';


// axios.defaults.baseURL = process.env.REACT_APP_API_URL;


// const host = axios.create({
//     baseUrl: process.env.REACT_APP_API_URL
// })


axios.defaults.baseURL = 'http://127.0.0.1:5000';


const host = axios.create({
    baseUrl: 'http://127.0.0.1:5000'
})

export {
    host
}