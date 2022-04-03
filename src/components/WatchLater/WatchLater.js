import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./WatchLater.css"

export const WatchLater = () => {
    return <div className="watchlater-container">
        <Categories />
        <div className="watchlater">
            <h2>WATCH LATER</h2>
            <div className="card-container">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    </div>
}