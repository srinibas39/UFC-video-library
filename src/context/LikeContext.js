
import { createContext, useState } from "react";
import { useContext } from "react";
import { AddLike } from "../services/AddLike";
import { GetLike } from "../services/GetLike";
import { RemoveLike } from "../services/RemoveLike";
import { handleToastError } from "../utils/toastUtils";


export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {

    const [likes, setLikes] = useState([]);
    const addLike = async ({ token, video }) => {
        try {
            const res = await AddLike(token, video);
            setLikes(res.data.likes)
        }
        catch (err) {
            handleToastError(err);
        }
    }
    const removeLike = async (token, videoId) => {
        try {
            const res = await RemoveLike(token, videoId);
            setLikes(res.data.likes)
        }
        catch (err) {
            handleToastError(err);
        }
    }

    const getLike = async (token) => {
        try {
            const res = await GetLike(token);
           handleToastError(res.data.likes);
        }
        catch (err) {
            console.log(err);
        }
    }

    return <LikeContext.Provider value={{ addLike, likes, removeLike,getLike }}>
        {children}
    </LikeContext.Provider>
}

export const useLike = () => useContext(LikeContext);

