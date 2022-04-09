import { useState } from "react"
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";


export const AddPlaylist = () => {
    const [openPlayListModal, setOpenPlaylistModal] = useState(false);
   
    return <>
        {
            openPlayListModal && <PlaylistModal setOpenPlaylistModal={setOpenPlaylistModal} />
        }
        <li onClick={() => setOpenPlaylistModal(!openPlayListModal)}><span className="material-icons-outlined">
            topic
        </span><div>Add Playlist</div></li>
    </>
}