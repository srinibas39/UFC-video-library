import axios from "axios";
import { useContext, useEffect, useState, createContext } from "react";
import { GetAllVideos } from "../services/GetAllVideos";
import { GetSingleVideo } from "../services/GetSingleVideo";
import { handleToastError } from "../utils/toastUtils";


export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {

  const [allVideos, setAllVideos] = useState([]);
  const [videoFilters, setVideoFilters] = useState(["MMA Matches", "MMA Podcasts", "MMA Facts"]);
  const [searchedVideo, setsearchedVideo] = useState(null)



  useEffect(() => {
    (async () => {
      try {
        const res = await GetAllVideos();
        if (res.status === 200 || res.status === 201) {

          setAllVideos([...res.data.videos]);
        }
      }
      catch (err) {
        handleToastError(err);
      }
    })()

  }, [])




  const getSingleVideo = async (videoId) => {
    try {
      const res = await GetSingleVideo(videoId);
      return res.data.video;
    }
    catch (err) {
      handleToastError(err);
    }
  }

  const addComments = (comment, videoId) => {

    const newAllVideos = allVideos.reduce((a, c) => c._id === videoId ?
      [...a, { ...c, comments: [...c.comments, comment] }] : [...a, c], [])

    setAllVideos([...newAllVideos]);

  }

  const addVideo = (video) => {
    setAllVideos([...allVideos, video])
    if (!videoFilters.includes(video.category))
      setVideoFilters([...videoFilters, video.category])

  }

  const getSearchedVideo = (title) => {
    setsearchedVideo(allVideos.filter((video) => video.title === title))
  }

  return <VideoContext.Provider value={{ allVideos, setAllVideos, getSingleVideo, addComments, addVideo, videoFilters, getSearchedVideo, searchedVideo }} >
    {children}
  </VideoContext.Provider>
}

export const useVideo = () => useContext(VideoContext);