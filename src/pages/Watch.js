import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/Navbar/Navbar"
import { VideoComponent } from "../components/VideoComponent/VideoComponent"
import { VideoOption } from "../components/VideoOptions/VideoOption"
import { useVideo } from "../context/VideoContext";

export const Watch = () => {

    const { videoId } = useParams();
    const { getSingleVideo, video } = useVideo();
    const [videoItem, setVideoItem] = useState({});


    useEffect(() => {
        (async () => {
            const videoItem = await getSingleVideo(videoId);
            setVideoItem(videoItem)
        })()

    }, []);
    
    return <>
        <NavBar />
        <VideoComponent video={videoItem} />
        <VideoOption videoItem={videoItem} />
    </>
}