import { Footer } from "../components/Footer/Footer"
import { Login } from "../components/Login/Login"
import { NavBar } from "../components/Navbar/Navbar"
import { ToastContainer } from "react-toastify"

export const LoginPage = () => {
    return <div style={{height:"100vh"}}>
        <NavBar />
        <Login />
        <Footer />
        <ToastContainer/>
    </div>
}