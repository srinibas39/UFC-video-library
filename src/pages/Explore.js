
import { useEffect, useState } from "react"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { VideoCardContainer } from "../components/VideoCardContainer/VideoCardContainer"
import { useVideo } from "../context/VideoContext"



export const Explore = () => {
    const { allVideos } = useVideo();
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        if (allVideos.length) {
            const suggestionList = allVideos.map((el) => el.title)
            setSuggestions(suggestionList);
        }
    }, [allVideos])
    return  <>
        <NavBar />
        <Categories />
        <AutoComplete suggestions={suggestions} />
        <VideoCardContainer />
        <Footer />
    </>
}