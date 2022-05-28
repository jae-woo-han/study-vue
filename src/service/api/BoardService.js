import {axiosInstance} from "@/service/api/ApiConfig";

export const getCategoryList = ()=>{
    return axiosInstance.get('/api/category');
}
