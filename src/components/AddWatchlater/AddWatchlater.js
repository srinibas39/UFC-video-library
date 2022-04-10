import { useParams } from "react-router-dom";
import { useFilter } from "../../context/FilterContext"
import { useVideo } from "../../context/VideoContext";
import "../WatchLater/WatchLater.css"


export const AddWatchLater = () => {
    const { state, dispatch } = useFilter()
    const { videoId } = useParams();
    const { allVideos } = useVideo();
    const videoItem = allVideos.find((el) => el._id === videoId);
    const watchLaterVideo = state.watchlater.find((ele) => ele._id === videoId);
    return <>
        {
            watchLaterVideo ?
                <li className="watch" onClick={() => dispatch({ type: "REMOVE_WATCHLATER", payload: videoItem._id })}><span className="material-icons-outlined">
                    watch_later
                </span><div>Add to Watch Later</div></li> :
                <li onClick={() => dispatch({ type: "ADD_WATCHLATER", payload: videoItem })}><span className="material-icons-outlined">
                    watch_later
                </span><div>Add to Watch Later</div></li>

        }
    </>
}