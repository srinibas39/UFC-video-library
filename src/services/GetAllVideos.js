import axios from "axios"


export const GetAllVideos = () => {
    return axios.get(`/api/videos/`)
}