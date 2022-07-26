import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../context/VideoContext";
import { handleToast, handleToastWarning } from "../../utils/toastUtils";
import "./Comment.css"
export const Comment = () => {
    const [comment, setComment] = useState("");
    const { addComments, allVideos } = useVideo();
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);



    useEffect(() => {
        const video = allVideos.find((vid) => vid._id === videoId)
        setVideo(video)
    }, [allVideos])



    const handleComments = () => {

        if (comment) {
            handleToast("Comment added successfully")
            setTimeout(() => {
                addComments(comment, videoId)
                setComment("");
            },1500)

        }
        else {
            handleToastWarning("Please fill the comment box")
        }

    }

    return <div className="comment">
        <div className="comment-header">
            Comment Here
        </div>
        <div className="comment-body">
            {
                video && video.comments.map((com, idx) => {
                    return <div className="comment-text" key={idx}>{com}</div>
                })
            }
        </div>

        <div className="comment-add">
            <input type="text" placeholder="Type your Comment" value={comment} onChange={(e) => setComment(e.target.value)}></input>
            <button onClick={handleComments}>ADD</button>
        </div>
    </div>
}