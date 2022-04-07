import { useFilter } from "../../context/FilterContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./Like.css"

export const Like = () => {
    const { state } = useFilter()
    return <div className="likes-container">
        <Categories />
        <div className="likes">
            <h2>LIKES</h2>
            <div className="card-container">
                {
                    state.likes && state.likes.map((el) => {
                        return <VideoCard el={el} />
                    })
                }
            </div>
        </div>
    </div>
}