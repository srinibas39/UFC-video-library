import axios from "axios"


export const GetLike = (token) => {
    return axios.get("api/user/likes",
        {
            headers: {
                authorization: token
            }
        })
}