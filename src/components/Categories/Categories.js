
import { Link } from "react-router-dom";
import { useMode } from "../../context/ModeContext";
import "./Categories.css";

export const Categories = () => {
    const { mode, setMode } = useMode();
    return <ul className="categories" id={mode ? `dark` : ""}>
        <Link to="/" style={{ textDecoration: "none" }}><li id={mode ? `dark` : ""}><span className="material-icons-outlined">
            home
        </span>
            <div> Home</div></li></Link>
        <Link to="/explore" style={{ textDecoration: "none" }}>
            <li id={mode ? `dark` : ""}><span className="material-icons-outlined">
                explore
            </span><div>Explore</div></li></Link>
        <Link to="/playlist" style={{ textDecoration: "none" }}>
            <li id={mode ? `dark` : ""}><span className="material-icons-outlined">
                topic
            </span><div>Playlist</div></li></Link>
        <Link to="/likes" style={{ textDecoration: "none" }}>
            <li id={mode ? `dark` : ""}><span className="material-icons-outlined">
                thumb_up_alt
            </span><div>Likes</div></li></Link>
        <Link to="/watchlater" style={{ textDecoration: "none" }}>
            <li id={mode ? `dark` : ""}><span className="material-icons-outlined">
                watch_later
            </span><div>Watch Later</div></li></Link>
        <Link to="/history" style={{ textDecoration: "none" }}>
            <li id={mode ? `dark` : ""}><span className="material-icons-outlined">
                history
            </span><div>history</div></li></Link>
        {
            !mode ? <Link to="#" style={{ textDecoration: "none" }}>
                <li id={mode ? `dark` : ""} onClick={() => setMode(true)}><span className="material-symbols-outlined" >
                    dark_mode
                </span><div>Dark</div></li></Link> :
                <Link to="#" style={{ textDecoration: "none" }}>
                    <li id={mode ? `dark` : ""} onClick={() => setMode(false)}> <span className="material-symbols-outlined">
                        light_mode
                    </span><div>Light</div></li></Link>
        }


        <Link to="/upload" style={{ textDecoration: "none" }}>
            <li id={mode ? `dark` : ""}><span className="material-symbols-outlined">
                file_upload
            </span><div>Upload</div></li></Link>
    </ul>

}