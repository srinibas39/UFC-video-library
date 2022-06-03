import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./PlaylistVideo.css"
import { useAuth } from "../../context/AuthContext"
import { usePlaylist } from "../../context/PlaylistContext"
export const PlaylistVideo = () => {
    
    const { playlist } = usePlaylist();
    
    return <div className="playlistVideo-container">

        <Categories />
        <div className="playlistVideo">
            <h2>{playlist.playlistName && playlist.playlistName.toUpperCase()}</h2>
            <div className="card-container">
                {
                    playlist.videos && playlist.videos.map((el) => {
                        return <VideoCard el={el} key={el._id} />
                    })
                }
            </div>
        </div>
    </div>

}