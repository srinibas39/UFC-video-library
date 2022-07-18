
import { useVideo } from "../../context/VideoContext"
import { VideoCard } from "../VideoCard/VideoCard"
import "./VideoCardContainer.css"


export const VideoCardContainer = () => {

    const { allVideos } = useVideo();

    return <>

        <div className="video-filters">

            <button>All</button>
            <button>MMA Matches</button>
            <button>MMA Podcasts</button>
            <button>MMA Facts </button>

        </div>
        <div className="videocard-container">
            <div className="video-header">
                <h2>EXPLORE</h2>
            </div>
            <div className="all-videos">

                {
                    allVideos && allVideos.map((el) => {
                        return <VideoCard key={el._id} el={el} />
                    })

                }
            </div>
        </div>




    </>
}