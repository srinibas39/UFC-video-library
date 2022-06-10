import axios from "axios"

export const RemoveVideoPlaylist = (token, playlistId, videoId) => {
    return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,
        {
            headers: {
                authorization: token
            }
        })
}