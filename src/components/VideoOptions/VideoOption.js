
import { useMode } from "../../context/ModeContext"
import { AddLike } from "../AddLike/AddLike"
import { AddPlaylist } from "../AddPlaylist/AddPlayList"
import { AddWatchLater } from "../AddWatchlater/AddWatchlater"
import "./VideoOption.css"

export const VideoOption = ({ videoItem }) => {

    const {mode}=useMode()  
    return <div className="video-option-container" id={mode?"dark":""}>
        <div className="video-option" >
            <div className="video-option-description">
                <div className="video-option-img">
                    <img src={require("../../images/ufc.jpg")} />
                </div>
                <div className="video-option-text" id={mode?"dark-font":""}>
                    <div className="video-option-header">{videoItem.title}</div>
                    <p>{videoItem.description}</p>
                </div>
            </div>
            <ul className="video-option-categories" id={mode?"dark-font":""}>

                <AddPlaylist video={videoItem} />
                <AddLike video={videoItem} />
                <AddWatchLater video={videoItem} />

            </ul>

        </div>

    </div>
}