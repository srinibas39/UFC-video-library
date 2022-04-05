import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./Like.css"

export const Like = () => {
    return <div className="likes-container">
        <Categories />
        <div className="likes">
            <h2>LIKES</h2>
            <div className="card-container">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    </div>
}