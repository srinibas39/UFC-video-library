import axios from "axios"

export const RemoveHistory = (token, videoId) => {
    return axios.delete(`/api/user/history/${videoId}`,
        {
            headers: {
                authorization: token
            }
        })
}