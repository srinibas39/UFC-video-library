import axios from "axios"


export const GetPlaylistVideos = (token, playlistId) => {
    return axios.get(`/api/user/playlists/${playlistId}`, {
        headers: {
            authorization: token,
        },
    });
};