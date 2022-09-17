import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useMode } from "../../context/ModeContext";
import { useVideo } from "../../context/VideoContext";
import "./AutoComplete.css"

export const AutoComplete = ({ suggestions }) => {


    const { getSearchedVideo,setText } = useVideo();
    const navigate = useNavigate();

    const [filteredSuggestion, setFiltereSuggestion] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [searchText, setSearchText] = useState("");

    const { mode } = useMode();


    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setFiltereSuggestion(suggestions.filter((el) => el.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1))
        setShowSuggestion(true);
    }

    const handleSearchText = (e) => {
        setSearchText(e.target.innerText);
        setText(e.target.innerText)
        getSearchedVideo(e.target.innerText);
        navigate("/search");
        setFiltereSuggestion([]);
        setShowSuggestion(false);
    }

    const handlekeyDown = (e) => {

        if (e.keyCode === 13) {
            setSearchText(filteredSuggestion[activeSuggestionIndex]);
            setFiltereSuggestion([]);
            setShowSuggestion(false)
            getSearchedVideo(filteredSuggestion[activeSuggestionIndex]);
            navigate("/search");
        }
        else if (e.keyCode === 38) {
            if (activeSuggestionIndex === 0) {
                return;
            }
            else {
                setActiveSuggestionIndex(activeSuggestionIndex - 1);
            }

        }
        else if (e.keyCode === 40) {
            if (activeSuggestionIndex === filteredSuggestion.length - 1) {
                return;
            }
            else {
                setActiveSuggestionIndex(activeSuggestionIndex + 1);
            }
        }

    }

    const SuggestionList = () => {
        return <>
            {filteredSuggestion.length ?
                <ul id={mode ? `dark` : ""}>
                    {
                        filteredSuggestion.map((el, idx) => {
                            return <li key={idx} className={activeSuggestionIndex === idx ? "auto-input" : ""} onClick={handleSearchText}>{el}</li>
                        })
                    }

                </ul> :

                <ul className="auto-input">
                    <li>
                        <em>Sorry, No search results for {searchText}</em>
                    </li>
                </ul>}
        </>


    }

    return <div className="search-con" id={mode ? `dark` : ""}>
        <input id={mode ? `dark` : ""} type="search" placeholder={"Type To search"} value={searchText} onChange={handleSearch} onKeyDown={handlekeyDown} />
        <span className="material-icons-outlined"> search </span>
        {showSuggestion && searchText && <SuggestionList />}
    </div>
}