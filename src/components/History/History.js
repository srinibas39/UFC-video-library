import { useAuth } from "../../context/AuthContext"
import { useHistory } from "../../context/HistoryContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./History.css";
import { ReactComponent as Historysvg } from "../../images/history.svg"


export const History = () => {
    const { history, removeAllHistory } = useHistory();
    const { token } = useAuth();
   


    return <div className="history-container" >
        <Categories />
        <div className="history">
            <div className="likes-header">
                <h2>HISTORY</h2>
                <button onClick={() => removeAllHistory(token)}>Clear All</button>
            </div>
            <div className="card-container">
                {
                    history.length ? history.map((el, idx) => {
                        return <VideoCard key={idx} el={el} />
                    }) : <Historysvg style={{ margin: "1rem" }} />
                }
            </div>
        </div>
    </div>
}