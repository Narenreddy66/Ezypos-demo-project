import axios from "axios";

const axiosInstance=axios.create({
    timeout:10000
});
axiosInstance.interceptors.request.use((config)=>{
    config.withCredentials=true;
    
    return config
}),(error)=>{
    return  Promise.reject(error)
}

axiosInstance.interceptors.response.use((response)=>{
    return response.data
}),(error)=>{
    return Promise.reject(error)
}
export default axiosInstance;