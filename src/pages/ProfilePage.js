import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { Profile } from "../components/Profile/Profile"

export const ProfilePage = () => {
    return <div style={{height:"100vh"}}>
        <NavBar />
        <Categories />
        <Profile />
        <Footer />
    </div>
}