import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useFilter } from "../../context/FilterContext"
import { useVideo } from "../../context/VideoContext";
import { useWatchlater } from "../../context/WatchlaterContext";
import "../WatchLater/WatchLater.css"


export const AddWatchLater = ({ video }) => {


    // new implementation
    const { token } = useAuth();
    const { addWatchlater, removeWatchlater, watchlater } = useWatchlater();
    const [videoItem, setVideoItem] = useState({});

    useEffect(() => {
        const videoItem = watchlater.find((el) => el._id === video._id);
        setVideoItem(videoItem)
    })

    return <>
        {
            videoItem ?
                <li className="watch" onClick={() => removeWatchlater(token, video._id)}><span className="material-icons-outlined">
                    watch_later
                </span></li> :
                <li onClick={() => addWatchlater(token, video)}><span className="material-icons-outlined">
                    watch_later
                </span></li>

        }
    </>
}