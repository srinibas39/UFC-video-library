import { Categories } from "../components/Categories/Categories"
import { NavBar } from "../components/Navbar/Navbar"
import { VideoCardContainer } from "../components/VideoCardContainer/VideoCardContainer"

export const Explore = () => {
    return <>
        <NavBar />
        <div className="main">
            <Categories />
            <VideoCardContainer />
        </div>
    </>
}