import {axiosInstance} from "@/service/api/apiConfig";

export const filesUpload = (files,postId)=>{
    //const data = files;
    const data = new FormData();
    files.forEach((file)=>{data.append("files",file);})

    console.log(data);
    return axiosInstance.post(`/api/files/${postId}`,
                data,
        {headers:{
                "Content-Type" : "multipart/form-data"
            }})
}