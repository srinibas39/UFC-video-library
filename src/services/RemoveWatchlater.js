import axios from "axios"

export const RemoveWatchlater = (token, videoId) => {
    return axios.delete(`/api/user/watchlater/${videoId}`,
        {
            headers: {
                authorization: token
            }
        })
}