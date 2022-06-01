import { createContext, useContext, useState } from "react";
import { AddHistory } from "../services/AddHistory";
import { RemoveAllHistory } from "../services/RemoveAllHistory";
import { RemoveHistory } from "../services/RemoveHistory";


export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {

    const [history, setHistory] = useState([]);
    const addHistory = async (token, video) => {
        try {
            const res = await AddHistory(token, video);
            setHistory(res.data.history);

        }
        catch (err) {
            console.log(err);
        }
    }
    const removeHistory = async (token, videoId) => {
        try {
            const res = await RemoveHistory(token, videoId);
            setHistory(res.data.history);
        }
        catch (err) {
            console.log(err);
        }
    }
    const removeAllHistory = async (token) => {
        try {
            const res = await RemoveAllHistory(token);
            setHistory(res.data.history)
        }
        catch (err) {
            console.log(err);
        }
    }
    return <HistoryContext.Provider value={{ addHistory, removeHistory, removeAllHistory, history }}>
        {children}
    </HistoryContext.Provider>
}

export const useHistory = () => useContext(HistoryContext);