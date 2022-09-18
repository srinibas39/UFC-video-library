import { createContext, useContext } from "react";
import { useState } from "react";
import { AddWatchlater } from "../services/AddWatchlater";
import { RemoveWatchlater } from "../services/RemoveWatchlater";
import { handleToastError } from "../utils/toastUtils";


export const WatchlaterContext = createContext();

export const WatchlaterProvider = ({ children }) => {


    const [watchlater, setWatchlater] = useState([]);

    const addWatchlater = async (token, video) => {
        try {
            const res = await AddWatchlater(token, video);
            setWatchlater(res.data.watchlater);

        }
        catch (err) {
            handleToastError(err.message)
        }
    }
    const removeWatchlater = async (token, videoId) => {
        try {
            const res = await RemoveWatchlater(token, videoId);
            setWatchlater(res.data.watchlater)

        }
        catch (err) {
            handleToastError(err.message)
        }
    }
    return <WatchlaterContext.Provider value={{ addWatchlater, watchlater, removeWatchlater }}>
        {children}
    </WatchlaterContext.Provider>
}

export const useWatchlater = () => useContext(WatchlaterContext);



