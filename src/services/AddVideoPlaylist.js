

import axios from "axios"


export const AddVideoPlaylist = (token, playlistId, video) => {
    return axios.post(`/api/user/playlists/${playlistId}`,
        { video },
        {
            headers: {
                authorization: token
            }
        })
}