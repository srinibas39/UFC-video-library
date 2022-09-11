import { useAuth } from "../../context/AuthContext"
import { useHistory } from "../../context/HistoryContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./History.css";
import { ReactComponent as Historysvg } from "../../images/history.svg"
import { useMode } from "../../context/ModeContext";
import { useEffect } from "react";


export const History = () => {
    const { history, removeAllHistory } = useHistory();
    const { token } = useAuth();
    const { mode } = useMode()


    return <div className="history-container" id={mode ? `dark` : ""} >
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