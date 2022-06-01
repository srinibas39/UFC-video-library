

import axios from "axios"


export const AddVideoPlaylist = (token, video, playlistId) => {
    return axios.post(`/api/user/playlists/${playlistId}`,
        { video },
        {
            headers:
            {
                authorization: token
            }
        })
}