import { Footer } from "../components/Footer/Footer"
import { History } from "../components/History/History"
import { NavBar } from "../components/Navbar/Navbar"
import { ToastContainer } from 'react-toastify';
import { useMode } from "../context/ModeContext";

export const HistoryPage = () => {
    const { mode } = useMode();
    return <div style={{ height: "100vh" }} id={mode ? `dark` : ""}>
        <NavBar />
        <History />
        <Footer />
        <ToastContainer />
    </div>
}