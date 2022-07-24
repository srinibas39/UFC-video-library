
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { VideoCardContainer } from "../components/VideoCardContainer/VideoCardContainer"



export const Explore = () => {

    return  <>
        <NavBar />
        <Categories />
        <AutoComplete />
        <VideoCardContainer  />
        <Footer />
    </>
}