import { Navigate } from "react-router-dom"


const ProtectRouting=({children})=>{

    const user=JSON.parse(localStorage.getItem("user"))
    if(!user){
        return <Navigate to="/login" ></Navigate>
    }

    return children
}

export default ProtectRouting