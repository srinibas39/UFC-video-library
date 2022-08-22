import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { WatchLater } from "../components/WatchLater/WatchLater"
import { ToastContainer } from "react-toastify"

export const WatchLaterPage = () => {
    return <div style={{height:"100vh"}}>
        <NavBar />
        <WatchLater />
        <Footer />
        <ToastContainer />
    </div>
}