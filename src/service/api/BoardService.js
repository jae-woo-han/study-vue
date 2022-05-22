import {axiosInstance} from "@/service/api/apiConfig";

export const getCategoryList = ()=>{
    return axiosInstance.get('/api/category');
}
