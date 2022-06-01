import { createContext, useContext, useState } from "react";
import { AddPlaylist } from "../services/AddPlaylist";
import { RemoveVideoPlaylist } from "../services/RemoveVideoPlaylist";


export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {

    const [playlists, setPlaylists] = useState([])

    const addPlaylist = async (token, playlist) => {
        try {
            const res = await AddPlaylist(token, playlist);
            setPlaylists(res.data.playlists);
        }
        catch (err) {
            console.log(err);
        }
    }

    const removePlaylist = async (token, playlistId) => {
        try {
            const res = await RemovePlaylist(token, playlistId);
            setPlaylists(res.data.playlists);
        }
        catch (err) {
            console.log(err);
        }
    }

    const addVideoPlaylist = async (token, playlistId, video) => {
        try {
            const res = await AddVideoPlaylist(token, playlistId, video);
            setPlaylists(res.data.playlists);
        }
        catch (err) {
            console.log(err);
        }
    }

    const removeVideoPlaylist = async(token, playlistId, videoId) => {
        try {
            const res = await RemoveVideoPlaylist(token, playlistId, videoId);
            setPlaylists(res.data.playlists);
        }
        catch (err) {
            console.log(err);
        }
    }

    return <PlaylistContext.Provider value={{ addPlaylist, removePlaylist, addVideoPlaylist, removeVideoPlaylist,playlists }}>
        {children}
    </PlaylistContext.Provider>
}

export const usePlaylist = () => useContext(PlaylistContext)