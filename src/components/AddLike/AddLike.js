
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLike } from "../../context/LikeContext";
import "../VideoOptions/VideoOption.css"


export const AddLike = ({ video }) => {


    const { addLike, likes, removeLike } = useLike();
    const { token } = useAuth();
    const [videoItem, setVideoItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const videoItem = likes.find((el) => el._id === video._id);
        setVideoItem(videoItem)
    })

    return <>

        {
            videoItem ? <li><span className={"material-icons like "}
                onClick={() => token ? removeLike(token, video._id) : navigate("/login")}>
                thumb_up_alt
            </span></li> :
                <li><span className={"material-icons"}
                    onClick={() => token ? addLike({ token, video }) : navigate("/login")}>
                    thumb_up_alt
                </span></li>
        }


    </>


}