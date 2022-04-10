import { useParams } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";
import { useVideo } from "../../context/VideoContext";
import "../VideoOptions/VideoOption.css"


export const AddLike = () => {
    const { state, dispatch } = useFilter()
    const { videoId } = useParams();
    const { allVideos } = useVideo();;
    const videoItem = allVideos.find((el) => el._id === videoId);
    const like = state.likes.find((ele) => ele._id === videoId);

    return <>
        {
            like ? <li><span className={"material-icons like "}
                onClick={() => dispatch({ type: "REMOVE_LIKE", payload: videoItem })}>
                thumb_up_alt
            </span><div>Likes</div></li> :
            <li><span className={"material-icons"}
                    onClick={() => dispatch({ type: "ADD_LIKE", payload: videoItem })}>
                    thumb_up_alt
            </span><div>Likes</div></li>

        }
    </>


}