
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLike } from "../../context/LikeContext";
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./Like.css"

export const Like = () => {

    const { likes, removeLike } = useLike();
    const { token } = useAuth();

    const handleClearAll = () => {
        likes.forEach(async (video) => {
            const res = await removeLike(token, video._id);
        })
    }

    return <div className="likes-container">
        <Categories />
        <div className="likes">
            <div className="likes-header">
                <h2>LIKES</h2>
                <button onClick={handleClearAll}>Clear All</button>
            </div>
            <div className="card-container">
                {
                    likes && likes.map((el) => {
                        return <VideoCard el={el} key={el._id} />
                    })
                }
            </div>
        </div>
    </div>
}