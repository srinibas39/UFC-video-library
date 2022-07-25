import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context/VideoContext"
import { Categories } from "../Categories/Categories";
import { NavBar } from "../Navbar/Navbar";
import { VideoCard } from "../VideoCard/VideoCard";
import "./SearchedVideo.css"

export const SearchedVideo = () => {
    const { searchedVideo } = useVideo();
    const navigate = useNavigate();

    return <>
        <NavBar />
        {
            searchedVideo ? <div className="likes-container">
                <Categories />
                <div className="likes">
                    <div className="searched-header">
                        <h2 style={{textAlign:"center"}}>Search Results {searchedVideo.map((el) => el.title)} </h2>
                    </div>
                    <div className="card-container">
                        {
                            searchedVideo.map((vid) => {
                                return <VideoCard el={vid} key={vid._id} />
                            })
                        }

                    </div>
                </div>
            </div> : navigate("/explore")
        }
    </>
}