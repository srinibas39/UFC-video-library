import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { PlaylistVideo } from "../components/PlaylistVideo/PlaylistVideo"
import { ToastContainer } from "react-toastify"
import { useMode } from "../context/ModeContext"

export const PlaylistVideoPage = () => {
    const {mode}=useMode()
    return <div style={{height:"100vh"}} id={mode?"dark":""}>
        <NavBar />
        <PlaylistVideo />
        <Footer />
        <ToastContainer/>
    </div>
}