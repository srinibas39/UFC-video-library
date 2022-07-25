

import { useAuth } from "../../context/AuthContext";
import { useLike } from "../../context/LikeContext";
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./Like.css"
import { ReactComponent as Likesvg } from "../../images/likes.svg"
import { handleToast } from "../../utils/toastUtils";


export const Like = () => {

    const { likes, removeLike } = useLike();
    const { token } = useAuth();

    const handleClearAll = () => {
        handleToast("Removing all the liked videos");
        setTimeout(() => {
            likes.forEach(async (video) => {
                const res = await removeLike(token, video._id);
            })
        }, 1500)

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
                    likes.length ? likes.map((el) => {
                        return <VideoCard el={el} key={el._id} />
                    }) : <Likesvg style={{ margin: "1rem" }} />
                }
            </div>
        </div>
    </div>
}