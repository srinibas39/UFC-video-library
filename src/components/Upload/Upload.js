
import { useState } from "react"
import "./Upload.css"
import { v4 as uuid } from "uuid";
import { useVideo } from "../../context/VideoContext";
import { handleToast, handleToastWarning } from "../../utils/toastUtils";
import { useMode } from "../../context/ModeContext";

export const Upload = () => {

    const { addVideo } = useVideo();
    const [form, setForm] = useState({
        title: "",
        video: "",
        thumbnail: "",
        description: "",
        category: "",
        comments: []
    })
    const { mode } = useMode()
    const handleUpload = () => {
        if (form.title && form.video && form.thumbnail && form.description && form.category) {
            handleToast("Upload Successful")
            setTimeout(() => {
                addVideo({ ...form, _id: uuid() })
                setForm({
                    ...form,
                    title: "",
                    video: "",
                    thumbnail: "",
                    description: "",
                    category: "",
                    comments: []
                })
            }, 1500)

        }
        else {
            handleToastWarning("Please fill up the upload form.")
        }
    }
    const handleDummyData = () => {
        setForm({
            ...form, title: "Khamzat Chimaev vs Kevin Holland",
            video: "https://www.youtube.com/watch?v=j9RPmb3yt7E",
            thumbnail: "https://i.ytimg.com/an_webp/j9RPmb3yt7E/mqdefault_6s.webp?du=3000&sqp=CM3r-pgG&rs=AOn4CLCrJb2T2w9nky7_kyyUfL32Kq4iaw",
            description: "Khamzat Chimaev vs Kevin Holland was a dominant quick submission finish from Khamzat who used his wrestling intelligently. How did he set up the submission? How strong is Khamzat? Who do they fight next?",
            category: "Fight Analysis"
        })
    }

    return <>
        <div className="upload-container" id={mode ? "dark" : ""}>
            <div className="upload" >
                <form id={mode ? "dark-font" : ""}>

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
            <button onClick={handleDummyData}>Fiil up with dummy data</button>
        </div>

    </>
}