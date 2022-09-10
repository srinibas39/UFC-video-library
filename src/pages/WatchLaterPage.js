import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { WatchLater } from "../components/WatchLater/WatchLater"
import { ToastContainer } from "react-toastify"
import { useMode } from "../context/ModeContext"

export const WatchLaterPage = () => {
    const {mode}=useMode()
    return <div style={{height:"100vh"}} id={mode?"dark":""}>
        <NavBar />
        <WatchLater />
        <Footer />
        <ToastContainer />
    </div>
}