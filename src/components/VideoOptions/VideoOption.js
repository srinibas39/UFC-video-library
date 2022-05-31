
import { AddLike } from "../AddLike/AddLike"
import { AddPlaylist } from "../AddPlaylist/AddPlayList"
import { AddWatchLater } from "../AddWatchlater/AddWatchlater"
import "./VideoOption.css"

export const VideoOption = ({ videoItem }) => {


    return <div className="video-option-container">
        <div className="video-option">
            <div className="video-option-header">Learn To Draw #01 - Sketching Basics + Materials</div>
            <ul className="video-option-categories">

                <AddPlaylist />
                <AddLike video={videoItem} />
                <AddWatchLater />

            </ul>

        </div>

    </div>
}