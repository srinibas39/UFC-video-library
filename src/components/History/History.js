import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./History.css"

export const History = () => {
    return <div className="history-container">
        <Categories />
        <div className="history">
            <h2>HISTORY</h2>
            <div className="card-container">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    </div>
}