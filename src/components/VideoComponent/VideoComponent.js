import { useParams } from "react-router-dom"
import { useFilter } from "../../context/FilterContext";



import { useVideo } from "../../context/VideoContext";
import { Comment } from "../Comment/Comment";

import "./VideoComponent.css";
import Iframe from 'react-iframe-click';

export const VideoComponent = () => {
    const { videoId } = useParams();
    const { allVideos } = useVideo();

    const getVideo = (videoId, allVideos) => {
        const videoItem = allVideos.find((el) => el._id === videoId);
        return videoItem;
    }

    const videoItem = getVideo(videoId, allVideos)

    const { state, dispatch } = useFilter();


    return <>

        <div className="video-player-container">
            <div className="video-player">
                <div className="video-iframe">
                    <Iframe src={videoItem && videoItem.video} onInferredClick={() => dispatch({ type: "ADD_HISTORY", payload: videoItem })} ></Iframe>
                </div>
                <Comment />
            </div>
        </div>


    </>

}