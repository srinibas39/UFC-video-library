import { useState } from "react"
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";


export const AddPlaylist = ({ video }) => {
    const [openPlayListModal, setOpenPlaylistModal] = useState(false);

    return <>
        {
            openPlayListModal && <PlaylistModal setOpenPlaylistModal={setOpenPlaylistModal} video={video} />
        }
        <li onClick={() => setOpenPlaylistModal(!openPlayListModal)}><span className="material-icons-outlined">
            topic
        </span></li>
    </>
}