
import { AddLike } from "../AddLike/AddLike"
import { AddPlaylist } from "../AddPlaylist/AddPlayList"
import { AddWatchLater } from "../AddWatchlater/AddWatchlater"
import "./VideoOption.css"

export const VideoOption = () => {


    return <div className="video-option-container">
        <div className="video-option">
            <div className="video-option-header">Learn To Draw #01 - Sketching Basics + Materials</div>
            <ul className="video-option-categories">
           
                <AddPlaylist/>
                <AddLike/>
                <AddWatchLater/>
               

            </ul>

        </div>

    </div>
}