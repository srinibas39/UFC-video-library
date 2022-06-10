
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useWatchlater } from "../../context/WatchlaterContext";
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

    return <>
        {
            videoItem ?
                <li className="watch" onClick={() => token ? removeWatchlater(token, video._id) : navigate("/login")}><span className="material-icons-outlined">
                    watch_later
                </span></li> :
                <li onClick={() => token ? addWatchlater(token, video) : navigate("/login")}><span className="material-icons-outlined">
                    watch_later
                </span></li>

        }
    </>
}