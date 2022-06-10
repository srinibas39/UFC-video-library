import { useAuth } from "../../context/AuthContext"
import { useHistory } from "../../context/HistoryContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./History.css"

export const History = () => {
    const { history, removeAllHistory } = useHistory();
    const { token } = useAuth();


    return <div className="history-container">
        <Categories />
        <div className="history">
            <div className="likes-header">
                <h2>HISTORY</h2>
                <button onClick={() => removeAllHistory(token)}>Clear All</button>
            </div>
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