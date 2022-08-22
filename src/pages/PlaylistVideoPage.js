import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { PlaylistVideo } from "../components/PlaylistVideo/PlaylistVideo"
import { ToastContainer } from "react-toastify"

export const PlaylistVideoPage = () => {
    return <>
        <NavBar />
        <PlaylistVideo />
        <Footer />
        <ToastContainer/>
    </>
}