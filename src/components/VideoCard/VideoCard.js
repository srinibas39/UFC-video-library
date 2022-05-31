import { Link } from "react-router-dom"
import "./VideoCard.css"

export const VideoCard = ({ el }) => {
    return <div className="videocard">
        <img src={el.thumbnail}></img>
        <p>{el.title}</p>
        <button ><Link to={`/watch/${el._id}`} className="link">Watch Now</Link></button>
    </div>
}