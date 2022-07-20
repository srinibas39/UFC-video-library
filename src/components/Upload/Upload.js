
import { useState } from "react"
import "./Upload.css"
import { v4 as uuid } from "uuid";
import { useVideo } from "../../context/VideoContext";
import { useAuth } from "../../context/AuthContext";
export const Upload = () => {
    const { allVideos, setAllVideos, addVideo } = useVideo();
    const { token } = useAuth();
    const [form, setForm] = useState({
        title: "",
        video: "",
        thumbnail: "",
        description: "",
        category: "",
    })
    const handleUpload = () => {
        // setAllVideos([...allVideos, { ...form, _id: uuid() }])
        addVideo(token, { ...form, _id: uuid() })
    }
    return <>
        <div className="upload-container">
            <div className="upload">
                <form>

                    <label htmlFor="title">Enter Title</label>
                    <input type="text" value={form.title} className="title" onChange={(e) => setForm({ ...form, title: e.target.value })} />


                    <label htmlFor="thumbnail">Enter thumbnail URL</label>
                    <input type="text" value={form.thumbnail} className="thumbnail" onChange={(e) => setForm({ ...form, thumbnail: e.target.value })} />

                    <label htmlFor="video">Enter Video URL</label>
                    <input type="text" value={form.video} className="video" onChange={(e) => setForm({ ...form, video: e.target.value })} />

                    <label htmlFor="category">Enter Video Category</label>
                    <input type="text" value={form.category} className="category" onChange={(e) => setForm({ ...form, category: e.target.value })} />

                    <label htmlFor="description">Enter Description</label>
                    <input type="text" value={form.description} className="description" onChange={(e) => setForm({ ...form, description: e.target.value })} />

                </form>
            </div>
            <button onClick={handleUpload}>UPLOAD</button>
        </div>

    </>
}