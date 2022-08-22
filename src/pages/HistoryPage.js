import { Footer } from "../components/Footer/Footer"
import { History } from "../components/History/History"
import { NavBar } from "../components/Navbar/Navbar"
import { ToastContainer } from 'react-toastify';

export const HistoryPage = () => {
    return <div style={{height:"100vh"}}>
        <NavBar />      
        <History/>
        <Footer/>
        <ToastContainer/>
    </div>
}