import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "../context/ContextData";

function ProductedRoute({children}){
    let {user}=useContext(userContext)
    return(
        <>
        {
            user ? children : ( <Navigate to="/login" replace/> )
        }
        </>
    )
}
export default ProductedRoute;