import { Footer } from "../components/Footer/Footer"
import { Like } from "../components/Like/Like"
import { NavBar } from "../components/Navbar/Navbar"
import { ToastContainer } from "react-toastify"

export const LikesPage = () => {
    return <>
        <NavBar />
        <Like/>
        <Footer/>
        <ToastContainer/>
    </>
}