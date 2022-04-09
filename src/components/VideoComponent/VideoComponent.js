import { useParams } from "react-router-dom"



import { useVideo } from "../../context/VideoContext";
import { Comment } from "../Comment/Comment";

import "./VideoComponent.css"

export const VideoComponent = () => {
    const { videoId } = useParams();
    const { allVideos } = useVideo();

    const getVideo = (videoId, allVideos) => {
        const videoItem = allVideos.find((el) => el._id === videoId);
        return videoItem;
    }

    const videoItem = getVideo(videoId, allVideos)
    

    return <>

        <div className="video-player-container">
            <div className="video-player">
                <iframe src={videoItem && videoItem.video} ></iframe>
                <Comment />
            </div>
        </div>


    </>

}