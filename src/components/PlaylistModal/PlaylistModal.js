
import { useState, useEffect } from "react"
import "./PlaylistModal.css"
import { usePlaylist } from "../../context/PlaylistContext";
import { useAuth } from "../../context/AuthContext";
import { handleToast, handleToastWarning } from "../../utils/toastUtils";
import { useMode } from "../../context/ModeContext";



export const PlaylistModal = ({ setOpenPlaylistModal, video }) => {


    const { playlists, addPlaylist, addVideoPlaylist, removeVideoPlaylist, getAllPlaylists } = usePlaylist();
    const { token } = useAuth();
    const [playlistName, setPlaylistName] = useState("");
    const {mode}=useMode()

    const handlePlaylists = (e, playlistId) => {
        if (e.target.checked) {
            handleToast("Adding your video in the playlist");
            setTimeout(() => {
                addVideoPlaylist(token, playlistId, video);
                getAllPlaylists(token);
            }, 1500)


        }
        else {
            handleToast("Removing your video from the playlist");
            setTimeout(() => {
                removeVideoPlaylist(token, playlistId, video._id);
                getAllPlaylists(token)
            }, 1500)

        }

    }

    const addPlaylistName = () => {
        if (playlistName.trim().length) {
            handleToast("Adding Playlist");
            setTimeout(() => {
                addPlaylist(token, { playlistName })
                setPlaylistName("")
            }, 1500)
        }
        else {
            handleToastWarning("Playlist field cannot be empty");
        }
    }

    const playlistModalClose = () => {
        handleToast("Closing the playlist model");
        setTimeout(() => {
            setOpenPlaylistModal(false)
        }, 1500)

    }




    return <div className="playlist-modal-container" >
        <ul className="playlist-modal" id={mode?"dark":""} >
            <div className="playlist-header" id={mode?"dark-font":""}>
                <p >Add To Playlist</p>
                <button onClick={playlistModalClose} id={mode?"dark-font":""}><span className="material-icons-outlined">
                    close
                </span></button>
            </div>
            {
                playlists && playlists.map((playlist) => {
                    return <li key={playlist._id} id={mode?"dark-font":""}><input type="checkbox" checked={playlist.videos.some((vid) => vid._id === video._id)} style={{ marginRight: "5px", cursor: "pointer" }} onChange={(e) => handlePlaylists(e, playlist._id)} />{playlist.playlistName}</li>
                })
            }

            <div className="playlist-input">
                <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} placeholder="Type your playlist"></input>
                <button onClick={addPlaylistName}>Add</button>
            </div>
        </ul>
    </div>

}