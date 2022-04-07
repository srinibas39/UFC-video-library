import "./PlaylistModal.css"

export const PlaylistModal = ({setOpenPlaylistModal}) => {
    return <ul className="playlist-modal" >
        <div className="playlist-header">
            <p>Add To Playlist</p>
            <button onClick={()=>setOpenPlaylistModal(false)}><span class="material-icons-outlined">
                close
            </span></button>
        </div>
        <li><span class="material-icons-outlined">
            add
        </span>news</li>
        <li><span class="material-icons-outlined">
            add
        </span>podcast</li>
        <li><span class="material-icons-outlined">
            add
        </span>Fights</li>
        <div className="playlist-input">
            <input placeholder="Type your playlist"></input>
            <button>Add</button>
        </div>
    </ul>

}