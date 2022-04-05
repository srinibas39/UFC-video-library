
import { useVideo } from "../../context/VideoContext"
import { VideoCard } from "../VideoCard/VideoCard"
import "./VideoCardContainer.css"


export const VideoCardContainer = () => {

    const {allVideos,setAllVideos} = useVideo()
    
    return <>
        <>

            <div className="videocard-container">
                <div className="video-header">
                    <h2>EXPLORE</h2>
                    <input type="search" placeholder="Type to search vidoes"></input>
                </div>

                {
                   allVideos && allVideos.map((el)=>{
                       return  <VideoCard key={el._id} el={el} />
                   })

                }
               
                

            </div>

        </>


    </>
}