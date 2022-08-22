
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLike } from "../../context/LikeContext";
import { handleToast } from "../../utils/toastUtils";
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

    const handleLike = () => {
        if (token) {
            handleToast("like added in the video successfully");
            setTimeout(() => {
                addLike({ token, video })
            }, 1500)
        }
        else {
            navigate("/login")
        }

    }

    const handleRemoveLike = () => {
        if (token) {
            handleToast("like removed from the video succesfully");
            setTimeout(() => {
                removeLike(token, video._id)
            }, 1500)
        }
        else {
            navigate("/login")
        }
    }

    return <>

        {
            videoItem ? <li><span className={"material-icons like "}
                onClick={handleRemoveLike}>
                thumb_up_alt
            </span></li> :
                <li><span className={"material-icons"}
                    onClick={handleLike}>
                    thumb_up_alt
                </span></li>
        }


    </>


}