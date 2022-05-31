import { useParams } from "react-router-dom"
import { useVideo } from "../../context/VideoContext";
import { Comment } from "../Comment/Comment";
import "./VideoComponent.css";
import Iframe from 'react-iframe-click';
import { useEffect, useState } from "react";
import { useFilter } from "../../context/FilterContext";


export const VideoComponent = ({ videoItem }) => {

    const { dispatch } = useFilter()

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