import { useNavigate } from "react-router-dom";
import { useMode } from "../../context/ModeContext";
import { useVideo } from "../../context/VideoContext"
import { Categories } from "../Categories/Categories";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navbar/Navbar";
import { VideoCard } from "../VideoCard/VideoCard";
import "./SearchedVideo.css";
import {ReactComponent as NotFound} from "../../images/notFound.svg"

export const SearchedVideo = () => {
    const { searchedVideo } = useVideo();
    const navigate = useNavigate();
    const {mode}=useMode()

    return <div style={{height:"100vh"}}>
        <NavBar />
        {
            searchedVideo ? <div className="likes-container" id={mode?"dark":""}>
                <Categories />
                <div className="likes">
                    <div className="searched-header" id={mode?"dark-font":""}>
                        <h2 style={{textAlign:"center"}}>Search Results {searchedVideo.map((el) => el.title)} </h2>
                    </div>
                    <div className="card-container">
                        {
                           searchedVideo.length ? searchedVideo.map((vid) => {
                                return <VideoCard el={vid} key={vid._id} />
                            }):<NotFound/>
                        }

                    </div>
                </div>
            </div> : navigate("/explore")
        }
        <Footer/>
    </div>
}