import axios from "axios";
import { createContext, useState } from "react";
import { useContext } from "react";
import { AddLike } from "../services/AddLike";
import { RemoveLike } from "../services/RemoveLike";


export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {

    const [likes, setLikes] = useState([]);
    const addLike = async ({ token, video }) => {
        try {
            const res = await AddLike(token, video);
            setLikes(res.data.likes)
        }
        catch (err) {
            console.log(err);
        }
    }
    const removeLike = async (token, videoId) => {
        try {
            const res = await RemoveLike(token, videoId);
            setLikes(res.data.likes)
        }
        catch (err) {
            console.log(err);
        }
    }

    return <LikeContext.Provider value={{ addLike, likes, removeLike }}>
        {children}
    </LikeContext.Provider>
}

export const useLike = () => useContext(LikeContext);

