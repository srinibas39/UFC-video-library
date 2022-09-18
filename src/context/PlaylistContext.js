import { createContext, useContext, useState } from "react";
import { AddPlaylist } from "../services/AddPlaylist";
import { AddVideoPlaylist } from "../services/AddVideoPlaylist";
import { GetAllPlaylists } from "../services/GetAllPlaylists";
import { GetPlaylistVideos } from "../services/GetPlaylistVideos";
import { RemovePlaylist } from "../services/RemovePlaylist";
import { RemoveVideoPlaylist } from "../services/RemoveVideoPlaylist";
import { handleToastError } from "../utils/toastUtils";


export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {

    const [playlists, setPlaylists] = useState([])
    const [playlist, setPlaylist] = useState({})

    const addPlaylist = async (token, playlist) => {
        try {
            const res = await AddPlaylist(token, playlist);
            setPlaylists(res.data.playlists);
        }
        catch (err) {
            handleToastError(err.message)
        }
    }

    const removePlaylist = async (token, playlistId) => {
        try {
            const res = await RemovePlaylist(token, playlistId);
            setPlaylists(res.data.playlists);
        }
        catch (err) {
            handleToastError(err.message)
        }
    }

    const addVideoPlaylist = async (token, playlistId, video) => {
        try {
            const res = await AddVideoPlaylist(token, playlistId, video);
            setPlaylist(res.data.playlist)

        }
        catch (err) {
            handleToastError(err.message)
        }
    }

    const removeVideoPlaylist = async (token, playlistId, videoId) => {
        try {
            const res = await RemoveVideoPlaylist(token, playlistId, videoId);
            setPlaylist(res.data.playlist)
        }
        catch (err) {
            handleToastError(err.message)
        }
    }

    const getAllPlaylists = async (token) => {
        try {
            const res = await GetAllPlaylists(token);
            setPlaylists(res.data.playlists)
        }
        catch (err) {
            handleToastError(err.message)
        }
    }

    const getPlaylistVideos = async (token, playlistId) => {
        try {
            const res = await GetPlaylistVideos(token, playlistId);
            setPlaylist(res.data.playlist)
        }
        catch (err) {
            handleToastError(err.message)
        }
    }
    

    return <PlaylistContext.Provider value={{ addPlaylist, removePlaylist, addVideoPlaylist, removeVideoPlaylist, playlists, getAllPlaylists, getPlaylistVideos, playlist, setPlaylists,setPlaylist }}>
        {children}
    </PlaylistContext.Provider>
}

export const usePlaylist = () => useContext(PlaylistContext)