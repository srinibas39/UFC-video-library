import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { Playlist } from "../components/Playlist/Playlist"
import { ToastContainer } from "react-toastify"


export const PlayListPage = () => {
    return <div style={{height:"100vh"}}>
        <NavBar />
        <Categories />
        <Playlist />
        <Footer/>
        <ToastContainer/>
    </div>
}