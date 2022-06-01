import { useParams } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";
import { useVideo } from "../../context/VideoContext";
import { useState } from "react"
import "./PlaylistModal.css"
import { usePlaylist } from "../../context/PlaylistContext";
import { useAuth } from "../../context/AuthContext";

export const PlaylistModal = ({ setOpenPlaylistModal }) => {


    const { playlists, addPlaylist } = usePlaylist();
    const { token } = useAuth();
    const [playlistName, setPlaylistName] = useState("");

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
                    return <li key={playlist._id}><input type="checkbox" style={{marginRight:"5px"}}/> {playlist.playlistName}</li>
                })
            }

            <div className="playlist-input">
                <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} placeholder="Type your playlist"></input>
                <button onClick={() => (addPlaylist(token, { playlistName }),setPlaylistName(""))}>Add</button>
            </div>
        </ul>
    </div>

}