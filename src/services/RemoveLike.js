import axios from "axios"

export const RemoveLike = (token, videoId) => {
    return axios.delete(`/api/user/likes/${videoId}`,
        {
            headers: {
                authorization: token
            }
        })
}