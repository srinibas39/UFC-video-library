
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLike } from "../../context/LikeContext";
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./Like.css"

export const Like = () => {

    const { likes, getLike } = useLike();
    const { token } = useAuth();

    useEffect(() => {
        (
            async() => {
                const res=await getLike(token); 
            }
        )()
    }, [])

    return <div className="likes-container">
        <Categories />
        <div className="likes">
            <h2>LIKES</h2>
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