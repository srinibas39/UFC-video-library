import { createContext, useContext } from "react";
import { useState } from "react";
import { AddWatchlater } from "../services/AddWatchlater";
import { RemoveWatchlater } from "../services/RemoveWatchlater";


export const WatchlaterContext = createContext();

export const WatchlaterProvider = ({ children }) => {


    const [watchlater, setWatchlater] = useState([]);

    const addWatchlater = async (token, video) => {
        try {
            const res = await AddWatchlater(token, video);
            setWatchlater(res.data.watchlater);

        }
        catch (err) {
            console.log(err);
        }
    }
    const removeWatchlater =async (token, videoId) => {
        try {
            const res = await RemoveWatchlater(token, videoId);
            setWatchlater(res.data.watchlater)
            
        }
        catch (err) {
            console.log(err);
        }
    }
    return <WatchlaterContext.Provider value={{ addWatchlater, watchlater, removeWatchlater,setWatchlater }}>
        {children}
    </WatchlaterContext.Provider>
}

export const useWatchlater = () => useContext(WatchlaterContext);



