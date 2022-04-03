import "./VideoOption.css"

export const VideoOption = () => {
    return <div className="video-option-container">
        <div className="video-option">
            <div className="video-option-header">Learn To Draw #01 - Sketching Basics + Materials</div>
            <ul className="video-option-categories">

                <li><span className="material-icons-outlined">
                    topic
                </span><div>Add Playlist</div></li>
                <li><span className="material-icons-outlined">
                    thumb_up_alt
                </span><div>Likes</div></li>
                <li><span className="material-icons-outlined">
                    watch_later
                </span><div>Add to Watch Later</div></li>

            </ul>

        </div>
        <div className="spacer">

        </div>
    </div>
}