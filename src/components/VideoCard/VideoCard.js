import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "../../context/HistoryContext";
import { useLike } from "../../context/LikeContext";
import { useWatchlater } from "../../context/WatchlaterContext";
import "./VideoCard.css"
import { usePlaylist } from "../../context/PlaylistContext";




export const VideoCard = ({ el, playlistId }) => {

    const { likes, removeLike } = useLike();
    const { history, removeHistory } = useHistory();
    const { watchlater, removeWatchlater } = useWatchlater();
    const { removeVideoPlaylist } = usePlaylist();
    const { token } = useAuth();
    const location = useLocation();
    const [explore, setExplore] = useState(false);
    const [btnState, setBtnState] = useState({
        like: false,
        history: false,
        watchlater: false,
        playlist: false
    })
    const navigate = useNavigate();



    useEffect(() => {
        if (location.pathname === "/explore") {
            setExplore(true)
        }
        if (location.pathname === "/likes") {
            setBtnState({ ...btnState, like: true })
        }
        if (location.pathname === "/history") {
            setBtnState({ ...btnState, history: true })
        }
        if (location.pathname === "/watchlater") {
            setBtnState({ ...btnState, watchlater: true })
        }
        if (location.pathname === `/playlist/${playlistId}`) {
            setBtnState({ ...btnState, playlist: true })
        }
    }, [])

    return <div className="videocard">
        <img src={el.thumbnail}></img>
        <div>
            <p>{el.title}</p>

            {
                likes.length && !explore && btnState.like ? <button className="btn-delete" onClick={() => removeLike(token, el._id)}><span className="material-icons-outlined">
                    delete
                </span></button> : ""

            }
            {
                history.length && !explore && btnState.history ? <button className="btn-delete" onClick={() => removeHistory(token, el._id)}><span className="material-icons-outlined">
                    delete
                </span></button> : ""

            }
            {
                watchlater.length && !explore && btnState.watchlater ? <button className="btn-delete" onClick={() => removeWatchlater(token, el._id)}><span className="material-icons-outlined">
                    delete
                </span></button> : ""

            }
            {
                playlistId && btnState.playlist ? <button className="btn-delete" onClick={() => removeVideoPlaylist(token, playlistId, el._id)}><span className="material-icons-outlined">
                    delete
                </span></button> : ""

            }

        </div>

        <button className="btn-watchnow" onClick={()=>navigate(`/watch/${el._id}`)}>
            Watch Now
        </button>
    </div>
}