import axios from "axios";
import { useContext, useEffect, useState, createContext } from "react";
import { GetSingleVideo } from "../services/GetSingleVideo";


export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [allVideos, setAllVideos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/videos", {
          method: "GET"
        })

        setAllVideos(res.data.videos)

      }
      catch (err) {
        console.log(err);
      }
    })()
  }, [])

  const getSingleVideo =  async(videoId) => {
    try {
      const res = await GetSingleVideo(videoId);
      return res.data.video;
    }
    catch (err) {
      console.log(err);
    }
  }

  const addComments = (comments, videoId) => {

    const newAllVideos = allVideos.reduce((a, c) => c._id === videoId ? [...a, { ...c, comments: [...comments] }] : [...a, c], [])
    setAllVideos(newAllVideos);


  }

  return <VideoContext.Provider value={{ allVideos, setAllVideos, getSingleVideo, addComments }} >
    {children}
  </VideoContext.Provider>
}

export const useVideo = () => useContext(VideoContext);