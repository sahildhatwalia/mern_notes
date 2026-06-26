import { createContext, useState } from "react";

export const SearchContext=createContext()

const Searcprovider=({children})=>{
    const [search,setSearch]=useState("")

    return(
        <SearchContext.Provider value={{search,setSearch}}>
               {children}
        </SearchContext.Provider>
    )
}
export default Searcprovider

