import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useFilter } from "../../context/FilterContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./PlaylistVideo.css"
export const PlaylistVideo = () => {
    const { play } = useParams();
    const { dispatch, getFilteredVideos } = useFilter();
    const filteredVideos = getFilteredVideos(play);
    return <div className="playlistVideo-container">
        <Categories />
        <div className="playlistVideo">
            <h2>{play.toUpperCase()}</h2>
            <div className="card-container">
                {
                    filteredVideos && filteredVideos.map((el) => {
                        return <VideoCard el={el} />
                    })
                }
            </div>
        </div>
    </div>

}