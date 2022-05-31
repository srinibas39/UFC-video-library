
import { useAuth } from "../../context/AuthContext"
import { useWatchlater } from "../../context/WatchlaterContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./WatchLater.css"

export const WatchLater = () => {
    const { watchlater, removeWatchlater } = useWatchlater();
    const { token } = useAuth();

    const handleClearAll = () => {
        watchlater.forEach(async(video) => {
            const res=await removeWatchlater(token,video._id);
        })
    }
    return <div className="watchlater-container">
        <Categories />
        <div className="watchlater">
            <div className="watchlater-header">
                <h2>WATCH LATER</h2>
                <button onClick={handleClearAll}>Clear All</button>
            </div>

            <div className="card-container">
                {
                    watchlater && watchlater.map((el) => {
                        return <VideoCard key={el._id} el={el} />
                    })
                }
            </div>
        </div>
    </div>
}