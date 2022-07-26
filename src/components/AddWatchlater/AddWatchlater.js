
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useWatchlater } from "../../context/WatchlaterContext";
import { handleToast } from "../../utils/toastUtils";
import "../WatchLater/WatchLater.css"


export const AddWatchLater = ({ video }) => {

    // new implementation
    const { token } = useAuth();
    const { addWatchlater, removeWatchlater, watchlater } = useWatchlater();
    const [videoItem, setVideoItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const videoItem = watchlater.find((el) => el._id === video._id);
        setVideoItem(videoItem)
    })

    const addingWatchlater = () => {
        if (token) {
            handleToast("Adding video to watch later")
            setTimeout(() => addWatchlater(token, video), 1500)
        }
        else {
            navigate("/login")
        }
    }
    const removingWatchlater = () => {
        if (token) {
            handleToast("Removing video from watchlater")
            setTimeout(() => removeWatchlater(token, video._id), 1500)
        }
        else {
            navigate("/login")
        }
    }

    return <>
        {
            videoItem ?
                <li className="watch" onClick={removingWatchlater}><span className="material-icons-outlined">
                    watch_later
                </span></li> :
                <li onClick={addingWatchlater}><span className="material-icons-outlined">
                    watch_later
                </span></li>

        }
    </>
}