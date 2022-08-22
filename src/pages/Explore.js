
import { useEffect, useState } from "react"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { VideoCardContainer } from "../components/VideoCardContainer/VideoCardContainer"
import { useVideo } from "../context/VideoContext"
import { ToastContainer } from 'react-toastify';



export const Explore = () => {
    const { allVideos } = useVideo();
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        if (allVideos.length) {
            const suggestionList = allVideos.map((el) => el.title)
            setSuggestions(suggestionList);
        }
    }, [allVideos])
    return <div style={{height:"100vh"}}>
        <NavBar />
        <Categories />
        <AutoComplete suggestions={suggestions} />
        <VideoCardContainer />
        <Footer />
        <ToastContainer />
    </div>
}