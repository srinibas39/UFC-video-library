

import axios from "axios"


export const AddPlaylist = (token, playlist) => {
    return axios.post("/api/user/playlists",
        { playlist },
        {
            headers:
            {
                authorization: token
            }
        })
}