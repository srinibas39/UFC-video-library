import { createContext, useContext } from "react";
import { useReducer } from "react";


export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const getFilteredVideos=(play)=>{
        return state.allVideos.filter((ele)=>ele.playlist.includes(play))
     }
    const filterReducer = (state, action) => {
        switch (action.type) {
            case "ADD_LIKE":
                return { ...state, likes: [...state.likes, action.payload] }
            case "REMOVE_LIKE":
                return { ...state, likes: state.likes.filter((el) => el._id !== action.payload._id) }
            case "ADD_PLAYLIST":
                return { ...state, playlists:!state.playlists.includes(action.payload) ? [...state.playlists, action.payload] :[...state.playlists]}
            case "UPDATE_ALL_VIDEOS":
                return { ...state, allVideos: [...action.payload] }
            case "DELETE_PLAYLIST":
                return {...state,playlists:state.playlists.filter((el)=>el!==action.payload)}
            case "ADD_WATCHLATER":
                return {...state,watchlater:[...state.watchlater,action.payload]}
            case "REMOVE_WATCHLATER":
                return {...state,watchlater:state.watchlater.filter((el)=>el._id!==action.payload)}   
            default:
                return { ...state }
        }
    }

    const [state, dispatch] = useReducer(filterReducer, {
        likes: [],
        playlists: [],
        allVideos: [],
        watchlater:[],
        
    })
    return <FilterContext.Provider value={{ state, dispatch,getFilteredVideos }}>
        {children}
    </FilterContext.Provider>
}
export const useFilter = () => useContext(FilterContext)