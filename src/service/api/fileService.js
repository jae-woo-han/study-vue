import {axiosInstance} from "@/service/api/apiConfig";

export const filesUpload = (files,postId)=>{
    const data = {files};
    return axiosInstance.post(`/api//files/${postId}`,data)
}