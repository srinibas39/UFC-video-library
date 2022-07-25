
import { Footer } from "../components/Footer/Footer"
import { Hero } from "../components/Hero/Hero"
import { NavBar } from "../components/Navbar/Navbar"
import { ToastContainer } from 'react-toastify';


export const Home = () => {
  
    return <div style={{ height: "88vh" }}>
        <NavBar />
        <Hero />
        <Footer />
        <ToastContainer/>
    </div>
}