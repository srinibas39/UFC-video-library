import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { Playlist } from "../components/Playlist/Playlist"
import { ToastContainer } from "react-toastify"
import { useMode } from "../context/ModeContext"


export const PlayListPage = () => {
    const {mode}=useMode()
    return <div style={{height:"100vh"}} id={mode?"dark":""}>
        <NavBar />
        <Categories />
        <Playlist />
        <Footer/>
        <ToastContainer/>
    </div>
}