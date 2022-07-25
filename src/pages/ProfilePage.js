import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { Profile } from "../components/Profile/Profile"

export const ProfilePage = () => {
    return <>
        <NavBar />
        <Categories />
        <Profile />
        <Footer />
    </>
}