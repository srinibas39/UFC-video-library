import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { handleToast } from "../../utils/toastUtils";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";


export const AddPlaylist = ({ video }) => {
    const [openPlayListModal, setOpenPlaylistModal] = useState(false);
    const navigate = useNavigate();
    const { token } = useAuth();

    const handlePlaylist = () => {
        if (token) {
            handleToast("opening the Playlist modal")
            setTimeout(() => setOpenPlaylistModal(!openPlayListModal), 1500)

        }
        else {
            navigate("/login")
        }
    }

    return <>
        {
            openPlayListModal && <PlaylistModal setOpenPlaylistModal={setOpenPlaylistModal} video={video} />
        }
        <li onClick={handlePlaylist}><span className="material-icons-outlined">
            topic
        </span></li>
    </>
}