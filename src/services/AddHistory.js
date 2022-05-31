import axios from "axios"


export const AddHistory = (token, video) => {
    return axios.post("/api/user/history",
        { video },
        {
            headers:
            {
                authorization: token
            }
        })
}