
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLike } from "../../context/LikeContext";
import "../VideoOptions/VideoOption.css"


export const AddLike = ({ video }) => {


    const { addLike, likes, removeLike } = useLike();
    const { token } = useAuth();
    const [videoItem, setVideoItem] = useState({});


    useEffect(() => {
        const videoItem = likes.find((el) => el._id === video._id);
        setVideoItem(videoItem)
    })

    return <>

        {
            videoItem ? <li><span className={"material-icons like "}
                onClick={() => removeLike(token,video._id)}>
                thumb_up_alt
            </span></li> :
                <li><span className={"material-icons"}
                    onClick={() => addLike({ token, video })}>
                    thumb_up_alt
                </span></li>
        }


    </>


}