

import axios from "axios"

export const RemoveAllHistory = (token) => {
    return axios.delete(`/api/user/history/all`,
        {
            headers: {
                authorization: token
            }
        })
}