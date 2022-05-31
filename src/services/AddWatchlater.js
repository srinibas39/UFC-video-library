import axios from "axios"

export const AddWatchlater = (token, video) => {
    return axios.post("/api/user/watchlater",
        { video },
        {
            headers:
            {
                authorization: token
            }
        })
}