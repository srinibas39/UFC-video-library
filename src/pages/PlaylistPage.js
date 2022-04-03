import { Categories } from "../components/Categories/Categories"
import { NavBar } from "../components/Navbar/Navbar"
import { Playlist } from "../components/Playlist/Playlist"


export const PlayListPage = () => {
    return <>
        <NavBar />
        <div style={{display:"flex",}}>
            <Categories />
            <Playlist />

        </div>

    </>
}