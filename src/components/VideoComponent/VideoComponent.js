
import { Comment } from "../Comment/Comment";
import "./VideoComponent.css";
import { useHistory } from "../../context/HistoryContext";
import { useAuth } from "../../context/AuthContext";
import React from 'react'
import ReactPlayer from 'react-player'
import { useMode } from "../../context/ModeContext";




export const VideoComponent = ({video}) => {

    const { addHistory } = useHistory();
    const { token } = useAuth();
    const {mode}=useMode()

    return <>

        <div className="video-player-container" id={mode?"dark":""}>
            <div className="video-player">
                <div className="video-iframe">
                    {/* <ReactPlayer url={video.video} controls height="100%" width="100%" onStart={() => addHistory(token, video)} /> */}
                </div>
                <Comment />
            </div>
        </div>


    </>
    
}