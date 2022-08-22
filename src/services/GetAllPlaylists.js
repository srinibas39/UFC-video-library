import axios from "axios"


export const GetAllPlaylists = (token) => {
    return axios.get("/api/user/playlists",
        {
            headers: {
                authorization: token
            }
        })
}