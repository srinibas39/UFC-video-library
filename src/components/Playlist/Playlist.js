import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { usePlaylist } from "../../context/PlaylistContext";
import "./Playlist.css";
import { ReactComponent as PlaylistSvg } from "../../images/playlist.svg"
import { handleToast } from "../../utils/toastUtils";
import { useMode } from "../../context/ModeContext";

export const Playlist = () => {

    const { playlists, removePlaylist } = usePlaylist();
    const { token } = useAuth();
    const navigate = useNavigate();
    const {mode}=useMode()

    const handleClearAll = () => {
        handleToast("Removing all Playlist")
        setTimeout(() => {
            playlists.forEach((play) => {
                removePlaylist(token, play._id)
            })
        }, 1500)

    }

    const handleRemovePlaylist = (playlist) => {
        handleToast(`Removing playlist ${playlist.playlistName}`);
        setTimeout(() => {
            removePlaylist(token, playlist._id)
        }, 1500)
    }



    return <div className="playlist-container" id={mode?"dark":""}>
        <div className="likes-header">
            <h2>PLAYLISTS</h2>
            <button onClick={handleClearAll}>Clear All</button>
        </div>
        <div className="playlists" id={mode?"dark-font":""}>
            {
                playlists.length ? playlists.map((playlist) => {

                    return <div key={playlist._id} className="playlist" onClick={() => playlist.videos.length && navigate(`/playlist/${playlist._id}`)}>
                        <div className="playlist-text">
                            <div>{playlist.playlistName}</div>
                            <div>{playlist.videos.length}</div>
                        </div>
                        <button onClick={() => handleRemovePlaylist(playlist)}><span className="material-icons-outlined">
                            delete
                        </span></button>
                    </div>
                }) : <PlaylistSvg style={{ margin: "1rem" ,height:"30rem"}} />
            }

        </div>
    </div>
} 