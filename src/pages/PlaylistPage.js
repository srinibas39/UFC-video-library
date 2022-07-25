import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { Playlist } from "../components/Playlist/Playlist"
import { ToastContainer } from "react-toastify"


export const PlayListPage = () => {
    return <>
        <NavBar />
        <Categories />
        <Playlist />
        <Footer/>
        <ToastContainer/>
    </>
}