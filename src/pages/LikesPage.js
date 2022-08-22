import { Footer } from "../components/Footer/Footer"
import { Like } from "../components/Like/Like"
import { NavBar } from "../components/Navbar/Navbar"
import { ToastContainer } from "react-toastify"

export const LikesPage = () => {
    return <div style={{height:"100vh"}}>
        <NavBar />
        <Like/>
        <Footer/>
        <ToastContainer/>
    </div>
}