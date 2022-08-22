import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { Upload } from "../components/Upload/Upload"
import { ToastContainer } from "react-toastify"
export const UploadPage = () => {
    return <>
        <NavBar />
        <Categories />
        <Upload />
        <Footer />
        <ToastContainer/>
    </>
}