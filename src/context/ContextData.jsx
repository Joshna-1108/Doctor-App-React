import { createContext, useState } from "react";

export let userContext = createContext();

function contextData({children}){
    let[user,setUser] =useState(localStorage.getItem("username") || null)

    let loginUser = (email) =>{
        setUser(email);
        localStorage.setItem("username",email);
    }

    let logoutUser = () =>{
        setUser(null);
        localStorage.removeItem("username");
    }

    return(
        <userContext.Provider value={{user,loginUser,logoutUser}}>
            {children}
        </userContext.Provider>
    )
}
export default contextData;