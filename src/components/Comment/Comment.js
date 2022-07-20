import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../context/VideoContext";
import "./Comment.css"
export const Comment = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const { addComments, allVideos,commentedVideos } = useVideo();
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);



    useEffect(() => {
        const video = allVideos.find((vid) => vid._id === videoId)
        setVideo(video)
    }, [comments])

    

    const handleComments = () => {
        if (comment) {
            setComments([...comments, comment])
            addComments(comments, videoId)
            setComment("");
        }
    }

    return <div className="comment">
        <div className="comment-header">
            Comment Here
        </div>
        <div className="comment-body">
            {
                video && video.comments.map((vid, idx) => {
                    return <div className="comment-text" key={idx}>{vid}</div>
                })
            }
        </div>

        <div className="comment-add">
            <input type="text" placeholder="Type your Comment" value={comment} onChange={(e) => setComment(e.target.value)}></input>
            <button onClick={handleComments}>ADD</button>
        </div>
    </div>
}