import { createContext , useContext} from "react";
import { useReducer } from "react";


export const FilterContext=createContext();

export const FilterProvider=({children})=>{

    const filterReducer=(state,action)=>{
        switch(action.type){
            case "ADD_LIKE":
                return {...state,likes:[...state.likes,action.payload]}   
            case "REMOVE_LIKE":
                return {...state,likes:state.likes.filter((el)=>el._id!==action.payload._id) }   
            default:
                return {...state}
        }
    }

    const [state,dispatch]=useReducer(filterReducer,{
        likes:[]
    })
    return <FilterContext.Provider value={{state,dispatch}}>
            {children}
    </FilterContext.Provider>
}
export const useFilter=()=>useContext(FilterContext)