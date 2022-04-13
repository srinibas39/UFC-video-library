import { useFilter } from "../../context/FilterContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./History.css"

export const History = () => {
    const { state } = useFilter()
    return <div className="history-container">
        <Categories />
        <div className="history">
            <h2>HISTORY</h2>
            <div className="card-container">
                {
                    state.history && state.history.map((el, idx) => {
                        return <VideoCard key={idx} el={el} />
                    })
                }
            </div>
        </div>
    </div>
}