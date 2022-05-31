
import { AddLike } from "../AddLike/AddLike"
import { AddPlaylist } from "../AddPlaylist/AddPlayList"
import { AddWatchLater } from "../AddWatchlater/AddWatchlater"
import "./VideoOption.css"

export const VideoOption = ({ videoItem }) => {


    return <div className="video-option-container">
        <div className="video-option">
            <div className="video-option-header">{videoItem.title}</div>
            <ul className="video-option-categories">

                <AddPlaylist />
                <AddLike video={videoItem} />
                <AddWatchLater video={videoItem} />

            </ul>

        </div>

    </div>
}