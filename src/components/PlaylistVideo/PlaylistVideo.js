import { useParams } from "react-router-dom"
import { useFilter } from "../../context/FilterContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./PlaylistVideo.css"
export const PlaylistVideo= () => {
     const {play}=useParams();
     const {state}=useFilter();
    
 
    
     const getFilteredVideos=(play)=>{
        return state.allVideos.filter((ele)=>ele.playlist.includes(play))
     }
     const filteredVideos=getFilteredVideos(play);

     
     
     
  
    return <div className="playlistVideo-container">
        <Categories />
        <div className="playlistVideo">
            <h2>HISTORY</h2>
            <div className="card-container">
                {
                    filteredVideos && filteredVideos.map((el)=>{
                        return <VideoCard el={el}/>
                    })
                }
            </div>
        </div>
    </div>

}