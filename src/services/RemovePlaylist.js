import axios from "axios";

export const RemovePlaylist = (token, playlistId) => {
    return axios.delete(`/api/user/playlists/${playlistId}`,
        {
            headers: {
                authorization: token
            }
        })
}