import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { Signup } from "../components/Signup/Signup"
import { ToastContainer } from "react-toastify"

export const SignupPage = () => {
    return <div style={{height:"100vh"}}>
        <NavBar />
        <Signup />
        <Footer/>
        <ToastContainer/>
    </div>
}