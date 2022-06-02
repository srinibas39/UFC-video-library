
import { useState } from "react"
import "./PlaylistModal.css"
import { usePlaylist } from "../../context/PlaylistContext";
import { useAuth } from "../../context/AuthContext";

export const PlaylistModal = ({ setOpenPlaylistModal, video }) => {


    const { playlists, addPlaylist, addVideoPlaylist, removeVideoPlaylist } = usePlaylist();
    const { token } = useAuth();
    const [playlistName, setPlaylistName] = useState("");


    const handlePlaylists = (e, playlistId) => {
        if (e.target.checked) {
            addVideoPlaylist(token, playlistId, video);

        }
        else {
            removeVideoPlaylist(token, playlistId, video._id);

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
                    return <li key={playlist._id}><input type="checkbox" style={{ marginRight: "5px", cursor: "pointer" }} onClick={(e) => handlePlaylists(e, playlist._id)} /> {playlist.playlistName}</li>
                })
            }

            <div className="playlist-input">
                <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} placeholder="Type your playlist"></input>
                <button onClick={() => (addPlaylist(token, { playlistName }), setPlaylistName(""))}>Add</button>
            </div>
        </ul>
    </div>

}