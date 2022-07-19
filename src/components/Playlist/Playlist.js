import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { usePlaylist } from "../../context/PlaylistContext";
import "./Playlist.css";
import { ReactComponent as PlaylistSvg } from "../../images/playlist.svg"

export const Playlist = () => {

    const { playlists, removePlaylist } = usePlaylist();
    const { token } = useAuth();
    const navigate = useNavigate();

    const handleClearAll = () => {
        playlists.forEach((play) => {
            removePlaylist(token, play._id)
        })
    }

    return <div className="playlist-container">
        <div className="likes-header">
            <h2>PLAYLISTS</h2>
            <button onClick={handleClearAll}>Clear All</button>
        </div>
        <div className="playlists">
            {
                playlists.length ? playlists.map((playlist) => {

                    return <div key={playlist._id} className="playlist" onClick={() => playlist.videos.length && navigate(`/playlist/${playlist._id}`)}>
                        <div className="playlist-text">
                            <div>{playlist.playlistName}</div>
                            <div>{playlist.videos.length}</div>
                        </div>
                        <button onClick={(e) => (e.stopPropagation(), removePlaylist(token, playlist._id))}><span className="material-icons-outlined">
                            delete
                        </span></button>
                    </div>
                }) : <PlaylistSvg style={{ margin: "1rem" }} />
            }

        </div>
    </div>
} 