import { createContext, useContext, useState } from "react";
import { AddHistory } from "../services/AddHistory";
import { RemoveAllHistory } from "../services/RemoveAllHistory";
import { RemoveHistory } from "../services/RemoveHistory";
import { handleToast, handleToastError } from "../utils/toastUtils";


export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {

    const [history, setHistory] = useState([]);
    const addHistory = async (token, video) => {
        try {
            const res = await AddHistory(token, video);
            setHistory(res.data.history);

        }
        catch (err) {
            handleToastError(err);
        }
    }
    const removeHistory = async (token, videoId) => {
        try {
            const res = await RemoveHistory(token, videoId);
            setHistory(res.data.history);
        }
        catch (err) {
            handleToastError(err);
        }
    }
    const removeAllHistory = async (token) => {
        try {
            handleToast("Removing all the videos from the history")
            setTimeout(async () => {
                const res = await RemoveAllHistory(token);
                setHistory(res.data.history)
            }, 1500)


        }
        catch (err) {
            handleToastError(err);
        }
    }
    return <HistoryContext.Provider value={{ addHistory, removeHistory, removeAllHistory, history }}>
        {children}
    </HistoryContext.Provider>
}

export const useHistory = () => useContext(HistoryContext);