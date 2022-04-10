import { useFilter } from "../../context/FilterContext"
import { Categories } from "../Categories/Categories"
import { VideoCard } from "../VideoCard/VideoCard"
import "./WatchLater.css"

export const WatchLater = () => {
    const {state}=useFilter()
    return <div className="watchlater-container">
        <Categories />
        <div className="watchlater">
            <h2>WATCH LATER</h2>
            <div className="card-container">
                {
                    state.watchlater && state.watchlater.map((el)=>{
                        return <VideoCard key={el._id} el={el}/>
                    })
                }
            </div>
        </div>
    </div>
}