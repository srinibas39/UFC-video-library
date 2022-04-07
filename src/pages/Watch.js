import { NavBar } from "../components/Navbar/Navbar"
import { VideoComponent } from "../components/VideoCard/VideoComponent/VideoComponent"
import { VideoOption } from "../components/VideoOptions/VideoOption"

export const Watch=()=>{
    return <>
        <NavBar/>
        <VideoComponent/>
        <VideoOption/>
    </>
}