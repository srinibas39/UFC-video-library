
import { useState } from "react";
import { useVideo } from "../../context/VideoContext"
import { VideoCard } from "../VideoCard/VideoCard"
import "./VideoCardContainer.css"


export const VideoCardContainer = () => {

    const { allVideos, videoFilters } = useVideo();

    const [filteredData, setFilteredData] = useState([]);



    const handleFilteredData = (category) => {
        if (!filteredData.includes(category)) {
            setFilteredData([...filteredData, category])
        }
        else {
            const newData = filteredData.filter((c) => c !== category);
            setFilteredData(newData)
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


    return <>

        <div className="video-filters">
            {
                videoFilters.map((category) => {
                    return <button key={category} id={filteredData.includes(category) ? `primary` : ""}
                        onClick={(e) => handleFilteredData(e.target.innerText)}>{category}</button>
                })
            }


        </div>
        <div className="videocard-container">
            <div className="video-header">
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