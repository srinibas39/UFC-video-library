
import { useLike } from "../../context/LikeContext";
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./Like.css"

export const Like = () => {

    const { likes } = useLike();
    return <div className="likes-container">
        <Categories />
        <div className="likes">
            <h2>LIKES</h2>
            <div className="card-container">
                {
                    likes && likes.map((el) => {
                        return <VideoCard el={el} />
                    })
                }
            </div>
        </div>
    </div>
}