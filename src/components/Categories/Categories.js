
import { Link } from "react-router-dom";
import "./Categories.css";

export const Categories = () => {
    return <ul className="categories">
        <Link to="/" style={{textDecoration:"none"}}><li><span className="material-icons-outlined">
            home
        </span>
            <div> Home</div></li></Link>
        <Link to="/explore" style={{textDecoration:"none"}}>
            <li><span className="material-icons-outlined">
                explore
            </span><div>Explore</div></li></Link>
        <Link to="/playlist" style={{textDecoration:"none"}}>
            <li><span className="material-icons-outlined">
                topic
            </span><div>Playlist</div></li></Link>
        {/* <Link to="likes">
            <li><span className="material-icons-outlined">
                thumb_up_alt
            </span><div>Likes</div></li></Link> */}
        <Link to="/watchlater" style={{textDecoration:"none"}}>
            <li><span className="material-icons-outlined">
                watch_later
            </span><div>Watch Later</div></li></Link>
        <Link to="/history" style={{textDecoration:"none"}}>
            <li><span className="material-icons-outlined">
                history
            </span><div>history</div></li></Link>
    </ul>

}