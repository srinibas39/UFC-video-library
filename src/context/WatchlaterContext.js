import { createContext, useContext } from "react";


export const WatchlaterContext = createContext();

export const WatchlaterProvider = ({ children }) => {
    return <WatchlaterContext.Provider>
        {children}
    </WatchlaterContext.Provider>
}

export const useWatchlater = () => useContext();



