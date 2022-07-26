
import { useAuth } from "../../context/AuthContext"
import { useWatchlater } from "../../context/WatchlaterContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./WatchLater.css"
import { ReactComponent as WatchlaterSvg } from "../../images/watchlater.svg"
import { handleToast } from "../../utils/toastUtils"

export const WatchLater = () => {
    const { watchlater, removeWatchlater } = useWatchlater();
    const { token } = useAuth();

    const handleClearAll = () => {
        handleToast("Removing all the videos from watch later")
        setTimeout(() => {
            watchlater.forEach(async (video) => {
                const res = await removeWatchlater(token, video._id);
            })
        }, 1500)

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
                    watchlater.length ? watchlater.map((el) => {
                        return <VideoCard key={el._id} el={el} />
                    }) : <WatchlaterSvg style={{ margin: "1rem" }} />
                }
            </div>
        </div>
    </div>
}