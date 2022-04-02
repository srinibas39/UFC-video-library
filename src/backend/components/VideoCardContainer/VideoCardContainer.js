import { VideoCard } from "../VideoCard/VideoCard"
import "./VideoCardContainer.css"

export const VideoCardContainer = () => {
    return <>
        <>

            <div className="videocard-container">
                <div className="video-header">
                    <h2>EXPLORE</h2>
                    <input type="search" placeholder="Type to search vidoes"></input>
                </div>
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />

            </div>

        </>


    </>
}