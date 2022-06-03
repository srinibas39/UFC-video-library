
import { useState, useEffect } from "react"
import "./PlaylistModal.css"
import { usePlaylist } from "../../context/PlaylistContext";
import { useAuth } from "../../context/AuthContext";



export const PlaylistModal = ({ setOpenPlaylistModal, video }) => {


    const { playlists, addPlaylist, addVideoPlaylist, removeVideoPlaylist, getAllPlaylists, playlist } = usePlaylist();
    const { token } = useAuth();
    const [playlistName, setPlaylistName] = useState("");







    const handlePlaylists = (e, playlistId) => {
        if (e.target.checked) {
            addVideoPlaylist(token, playlistId, video);
            getAllPlaylists(token);

        }
        else {
            removeVideoPlaylist(token, playlistId, video._id);
            getAllPlaylists(token)
        }

    }



    return <div className="playlist-modal-container">
        <ul className="playlist-modal" >
            <div className="playlist-header">
                <p>Add To Playlist</p>
                <button onClick={() => setOpenPlaylistModal(false)}><span className="material-icons-outlined">
                    close
                </span></button>
            </div>
            {
                playlists && playlists.map((playlist) => {
                    return <li key={playlist._id}><input type="checkbox" checked={playlist.videos.some((vid) => vid._id === video._id)} style={{ marginRight: "5px", cursor: "pointer" }} onChange={(e) => handlePlaylists(e, playlist._id)} />{playlist.playlistName}</li>
                })
            }

            <div className="playlist-input">
                <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} placeholder="Type your playlist"></input>
                <button onClick={() =>(playlistName.trim().length && addPlaylist(token, { playlistName }), setPlaylistName(""))}>Add</button>
            </div>
        </ul>
    </div>

}