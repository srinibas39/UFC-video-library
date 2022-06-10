import axios from "axios"


export const GetSingleVideo = (videoId) => {
    return axios.get(`/api/video/${videoId}`)
}