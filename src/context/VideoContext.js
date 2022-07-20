import axios from "axios";
import { useContext, useEffect, useState, createContext } from "react";
import { GetAllVideos } from "../services/GetAllVideos";
import { GetSingleVideo } from "../services/GetSingleVideo";


export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {

  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {


    (async () => {
      try {
        const res = await GetAllVideos();
        if (res.status === 200 || res.status === 201) {

          setAllVideos([...res.data.videos]);
          console.log("a");

        }
      }
      catch (err) {
        console.log(err);
      }
    })()

  }, [])




  const getSingleVideo = async (videoId) => {
    try {
      const res = await GetSingleVideo(videoId);
      return res.data.video;
    }
    catch (err) {
      console.log(err);
    }
  }

  const addComments = (comment, videoId) => {
    
    const newAllVideos = allVideos.reduce((a, c) => c._id === videoId ?
      [...a, { ...c, comments: [...c.comments,comment] }] : [...a,c], [])

      console.log(newAllVideos);

    setAllVideos([...newAllVideos]);
   
  }





  return <VideoContext.Provider value={{ allVideos, setAllVideos, getSingleVideo, addComments }} >
    {children}
  </VideoContext.Provider>
}

export const useVideo = () => useContext(VideoContext);