import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://localhost:30000'
});

export const getCategoryList = ()=>{
    return axiosInstance.get('/api/category');
}
