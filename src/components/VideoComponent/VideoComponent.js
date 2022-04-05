import { Comment } from "../Comment/Comment"
import { VideoOption } from "../VideoOptions/VideoOption"
import "./VideoComponent.css"

export const VideoComponent = () => {
    return <div className="video-player-container">
        <div className="video-player">
            <iframe src="https://www.youtube.com/embed/HelivOF6vI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Comment />
        </div>

    </div>
}