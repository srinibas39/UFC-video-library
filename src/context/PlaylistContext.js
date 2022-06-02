import { createContext, useContext, useState } from "react";
import { AddPlaylist } from "../services/AddPlaylist";
import { AddVideoPlaylist } from "../services/AddVideoPlaylist";
import { GetAllPlaylists } from "../services/GetAllPlaylists";
import { RemovePlaylist } from "../services/RemovePlaylist";
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

        }
        catch (err) {
            console.log(err);
        }
    }

    const removeVideoPlaylist = async (token, playlistId, videoId) => {
        try {
            const res = await RemoveVideoPlaylist(token, playlistId, videoId);

        }
        catch (err) {
            console.log(err);
        }
    }

    const getAllPlaylists = async (token) => {
        try {
            const res = await GetAllPlaylists(token);
            setPlaylists(res.data.playlists)
        }
        catch (error) {
            console.log(error);
        }
    }

    const getVideoPlaylist = async (token, playlistId) => {
        try {
            const res = await getVideoPlaylist(token, playlistId);
            console.log(res);
        }
        catch (err) {
            console.log(error);
        }
    }

    return <PlaylistContext.Provider value={{ addPlaylist, removePlaylist, addVideoPlaylist, removeVideoPlaylist, playlists, getAllPlaylists }}>
        {children}
    </PlaylistContext.Provider>
}

export const usePlaylist = () => useContext(PlaylistContext)