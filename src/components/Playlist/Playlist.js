import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { usePlaylist } from "../../context/PlaylistContext";
import "./Playlist.css";

export const Playlist = () => {

    const { playlists, removePlaylist } = usePlaylist();
    const { token } = useAuth();
    const navigate = useNavigate();

    return <div className="playlist-container">
        <h2>MY PLAYLISTS</h2>
        <div className="playlists">
            {
                playlists && playlists.map((playlist) => {

                    return <div key={playlist._id} className="playlist" onClick={() => navigate(`/playlist/${playlist._id}`)}>
                        <div className="playlist-text">
                            <div>{playlist.playlistName}</div>
                            <div>{playlist.videos.length}</div>
                        </div>
                        <button onClick={(e) => (e.stopPropagation(), removePlaylist(token, playlist._id))}><span className="material-icons-outlined">
                            delete
                        </span></button>
                    </div>
                })
            }

        </div>
    </div>
} 