import { useParams } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";
import { useVideo } from "../../context/VideoContext";
import { useState } from "react"
import "./PlaylistModal.css"

export const PlaylistModal = ({ setOpenPlaylistModal }) => {
    const { state, dispatch } = useFilter();
    const { videoId } = useParams();
    const { allVideos } = useVideo();

    const getVideo = (videoId, allVideos) => {
        const videoItem = allVideos.find((el) => el._id === videoId);
        return videoItem;
    }

    const videoItem = getVideo(videoId, allVideos);


    const [playlist, setPlaylist] = useState("");

    const [newAllVideos, setNewAllVideos] = useState(allVideos);
    const handlePlaylist = (play) => {
        setNewAllVideos(() => {
            const newVideos = [...allVideos];
            newVideos.forEach((ele) => {
                if (ele._id === videoId) {
                    if (!ele.playlist.includes(play)) {
                        ele.playlist = [...ele.playlist, play];
                    }
                }
            })
            return newVideos;

        })

        dispatch({ type: "UPDATE_ALL_VIDEOS", payload: newAllVideos })

    }




    return <ul className="playlist-modal" >
        <div className="playlist-header">
            <p>Add To Playlist</p>
            <button onClick={() => setOpenPlaylistModal(false)}><span class="material-icons-outlined">
                close
            </span></button>
        </div>
        {
            state.playlists && state.playlists.map((el, idx) => {
                return <li key={idx} onClick={() => handlePlaylist(el)}><span class="material-icons-outlined"  >
                    add
                </span>{el}</li>
            })
        }

        <div className="playlist-input">
            <input value={playlist} onChange={(e) => setPlaylist(e.target.value)} placeholder="Type your playlist"></input>
            <button onClick={() => (dispatch({ type: "ADD_PLAYLIST", payload: playlist }), setPlaylist(""))}>Add</button>
        </div>
    </ul>

}