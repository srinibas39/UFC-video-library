
import "./Categories.css";

export const Categories = () => {
    return <ul className="categories">
        <li><span className="material-icons-outlined">
            home
        </span>
            <div> Home</div></li>
        <li><span className="material-icons-outlined">
            explore
        </span><div>Explore</div></li>
        <li><span className="material-icons-outlined">
            topic
        </span><div>Playlist</div></li>
        <li><span className="material-icons-outlined">
            thumb_up_alt
        </span><div>Likes</div></li>
        <li><span className="material-icons-outlined">
            watch_later
        </span><div>Watch Later</div></li>
        <li><span className="material-icons-outlined">
            history
        </span><div>history</div></li>
    </ul>

}