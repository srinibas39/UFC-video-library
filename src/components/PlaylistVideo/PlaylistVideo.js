import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./PlaylistVideo.css"
import { useAuth } from "../../context/AuthContext"
import { usePlaylist } from "../../context/PlaylistContext"
import { useMode } from "../../context/ModeContext"
export const PlaylistVideo = () => {

    const { removeVideoPlaylist, getPlaylistVideos, playlist, getAllPlaylists } = usePlaylist();
    const { playlistId } = useParams();
    const { token } = useAuth();
    const {mode}=useMode()

    useEffect(() => {
        getPlaylistVideos(token, playlistId);
        getAllPlaylists(token);
    }, [playlist])

    const handleClearAll = () => {
        playlist.videos.forEach((vid) => {
            removeVideoPlaylist(token, playlist._id, vid._id)
        })
    }
    return <>
        {
            playlist && <div className="playlistVideo-container" id={mode?"dark":""}>

                <Categories />
                <div className="playlistVideo">
                    <div className="likes-header">
                        <h2>{playlist.playlistName && playlist.playlistName.toUpperCase()}</h2>
                        <button onClick={handleClearAll}>Clear All</button>
                    </div>

                    <div className="card-container" >
                        {
                            playlist.videos && playlist.videos.map((video) => {
                                return <VideoCard el={video} key={video._id} playlistId={playlistId} />
                            })
                        }
                    </div>
                </div>
            </div>
        }
    </>

}