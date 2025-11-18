import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/v1'
const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 4000,
    headers: {
        'Content-Type': 'application/json'
    }

})

AxiosInstance.interceptors.request.use(
    (config)=>{
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

AxiosInstance.interceptors.request.use(
    (response)=>{
        return response;
    },
    (error)=>{
        return Promise.reject(error)
    }
)




export default AxiosInstance