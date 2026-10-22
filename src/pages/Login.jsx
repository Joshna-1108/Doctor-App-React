import { useState } from "react";

function Login(){
    let[email,setEmail] = useState("");
    let[password,setPassword] = useState("");
    let nav = useNavigate();
    let {loginUser} = useContext(contextData)


    let handleLogin = async(e) => {

        try{
             e.preventDefault();
            console.log("email:" +email);
            console.log("passsword:"+password);
            
            let res = await axios.post("https://api-bdti.onrender.com/patients",{email,password})
            console.log(result);
            
            if(res.status === 200){
                nav("/")
                //localStorage.setItem("token",res.data.email)
                
            }

            setEmail("");
            setPassword("");
        }catch(e){
            console.log(e);
        }
    }


    return(
        <>
            <form onSubmit={handleLogin}>
                <h1>Login page</h1>
                <input type="text" placeholder="enter username" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
                <input type="text" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
                <input type="submit" />
            </form>
        </>
    )
}
export default Login;