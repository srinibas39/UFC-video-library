import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categories } from "../components/Categories/Categories";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/Navbar/Navbar"
import { VideoComponent } from "../components/VideoComponent/VideoComponent"
import { VideoOption } from "../components/VideoOptions/VideoOption"
import { useVideo } from "../context/VideoContext";
import { ToastContainer } from "react-toastify"
import { useMode } from "../context/ModeContext";

export const Watch = () => {

    const { videoId } = useParams();
    const { allVideos } = useVideo();
    const [videoItem, setVideoItem] = useState({});
   

    useEffect(() => {
        const video = allVideos.find((vid) => vid._id === videoId);
        setVideoItem(video)

    });

    return videoItem && <div style={{ height: "100vh" }}>
        <NavBar />
        <Categories />
        <VideoComponent video={videoItem} />
        <VideoOption videoItem={videoItem} />
        <Footer />
        <ToastContainer />
    </div>
}