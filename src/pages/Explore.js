
import { useEffect, useState } from "react"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Categories } from "../components/Categories/Categories"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import { VideoCardContainer } from "../components/VideoCardContainer/VideoCardContainer"
import { useVideo } from "../context/VideoContext"
import { GetAllVideos } from "../services/GetAllVideos"


export const Explore = () => {

    return  <>
        <NavBar />
        <Categories />
        <AutoComplete />
        <VideoCardContainer  />
        <Footer />

    </>
}