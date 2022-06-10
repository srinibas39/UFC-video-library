import "./Comment.css"
export const Comment=()=>{
    return <div className="comment">
          <div className="comment-header">
             Comment Here
          </div>
          <div className="comment-text">comments</div>
          <input type="text" placeholder="Type your Comment"></input>
    </div>
}