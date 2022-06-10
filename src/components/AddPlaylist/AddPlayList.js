import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";


export const AddPlaylist = ({ video }) => {
    const [openPlayListModal, setOpenPlaylistModal] = useState(false);
    const navigate = useNavigate();
    const { token } = useAuth();

    return <>
        {
            openPlayListModal && <PlaylistModal setOpenPlaylistModal={setOpenPlaylistModal} video={video} />
        }
        <li onClick={() => token ? setOpenPlaylistModal(!openPlayListModal) : navigate("/login")}><span className="material-icons-outlined">
            topic
        </span></li>
    </>
}