import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../context/PlaylistContext";
import { useEffect } from "react";

import "./Playlist.css"
import { useAuth } from "../../context/AuthContext";

export const Playlist = () => {
    const { playlists, getAllPlaylists, removePlaylist } = usePlaylist();

    const navigate = useNavigate();
    const { token } = useAuth()

    useEffect(() => {
        getAllPlaylists(token);
    }, [])
    return <div className="playlist-container">
        <h2>MY PLAYLISTS</h2>
        <div className="playlists">
            {
                playlists && playlists.map((playlist) => {

                    return <div key={playlist._id} className="playlist" onClick={() => navigate(`/pvideo/${playlist}`)}>
                        <div className="playlist-text">
                            <div>{playlist.playlistName}</div>
                            <div>{playlist.videos.length}</div>
                        </div>
                        <button onClick={() => removePlaylist(token, playlist._id)}><span className="material-icons-outlined">
                            delete
                        </span></button>
                    </div>
                })
            }

        </div>
    </div>
} 