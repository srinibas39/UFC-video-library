import { Footer } from "../components/Footer/Footer"
import { History } from "../components/History/History"
import { NavBar } from "../components/Navbar/Navbar"
import { ToastContainer } from 'react-toastify';

export const HistoryPage = () => {
    return <>
        <NavBar />      
        <History/>
        <Footer/>
        <ToastContainer/>
    </>
}