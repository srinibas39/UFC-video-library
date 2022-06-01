import { useFilter } from "../../context/FilterContext"
import { useHistory } from "../../context/HistoryContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./History.css"

export const History = () => {
    const { history } = useHistory();
    

    return <div className="history-container">
        <Categories />
        <div className="history">
            <h2>HISTORY</h2>
            <div className="card-container">
                {
                    history && history.map((el, idx) => {
                        return <VideoCard key={idx} el={el} />
                    })
                }
            </div>
        </div>
    </div>
}