
import { useState } from "react";
import { useMode } from "../../context/ModeContext";
import { useVideo } from "../../context/VideoContext"
import { handleToast } from "../../utils/toastUtils";
import { VideoCard } from "../VideoCard/VideoCard"
import "./VideoCardContainer.css"


export const VideoCardContainer = () => {

    const { allVideos, videoFilters } = useVideo();

    const [filteredData, setFilteredData] = useState([]);
    const { mode } = useMode();




    const handleFilteredData = (category) => {


        if (!filteredData.includes(category)) {
            handleToast(`Selecting ${category}`)
            setTimeout(() => {
                setFilteredData([...filteredData, category])
            }, 1500)
        }
        else {
            handleToast(`Removing ${category}`)
            setTimeout(() => {
                const newData = filteredData.filter((c) => c !== category);
                setFilteredData(newData)
            }, 1500)

        }

    }
    const getFilteredData = () => {

        if (filteredData.length) {
            const filteredVideos = allVideos.filter((el) => {
                if (filteredData.includes(el.category)) {
                    return el;
                }
            })
            return filteredVideos;
        }
        else {
            return allVideos;
        }
    }

    const categoryData = getFilteredData();


    return allVideos && <>

        <div className="video-filters" id={mode ? `dark` : ""}>
            {
                videoFilters.map((category) => {
                    return <button key={category} id={filteredData.includes(category) ? `primary` : ""}
                        onClick={(e) => handleFilteredData(e.target.innerText)}>{category}</button>
                })
            }


        </div>
        <div className="videocard-container" id={mode ? `dark` : ""}>
            <div className="video-header" >
                <h2>EXPLORE</h2>
            </div>
            <div className="all-videos">

                {
                    categoryData && categoryData.map((el) => {
                        return <VideoCard key={el._id} el={el} />
                    })

                }
            </div>
        </div>




    </>
}