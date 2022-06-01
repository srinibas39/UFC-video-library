
import { Comment } from "../Comment/Comment";
import "./VideoComponent.css";
import { useHistory } from "../../context/HistoryContext";
import { useAuth } from "../../context/AuthContext";
import React from 'react'
import ReactPlayer from 'react-player'



export const VideoComponent = ({ video }) => {

    const { addHistory } = useHistory();
    const { token } = useAuth();


    return <>

        <div className="video-player-container">
            <div className="video-player">
                <div className="video-iframe">
                    <ReactPlayer url={video && video.video} height="100%" width="100%" onStart={() => addHistory(token, video)} />
                </div>
                <Comment />
            </div>
        </div>


    </>

}