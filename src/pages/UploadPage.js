import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { Upload } from "../components/Upload/Upload"

export const UploadPage = () => {
    return <>
        <NavBar />
        <Categories />
        <Upload />
        <Footer />
    </>
}