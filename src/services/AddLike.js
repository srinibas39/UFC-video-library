import axios from "axios"


export const AddLike = (token, video) => {
    return axios.post("/api/user/likes",
        { video },
        {
            headers:
            {
                authorization: token
            }
        })
}