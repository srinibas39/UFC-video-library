import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/FilterContext"

import "./Playlist.css"

export const Playlist = () => {
    const { state ,getFilteredVideos} = useFilter();
    const navigate = useNavigate();
    return <div className="playlist-container">
        <h2>MY PLAYLISTS</h2>
        <div className="playlists">
            {
                state.playlists && state.playlists.map((el, idx) => {
                    const filteredVideos=getFilteredVideos(el);
                    const nVideos=filteredVideos.length
                    return <div key={idx} className="playlist" onClick={() => navigate(`/pvideo/${el}`)}>
                        <div className="playlist-text">
                            <div>{el}</div>
                            <div>{nVideos}</div>
                        </div>
                        <button><span class="material-icons-outlined">
                            delete
                        </span></button>
                    </div>
                })
            }

        </div>
    </div>
} 