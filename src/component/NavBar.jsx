import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";

function NavBar() {
    let styles = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "blue",
        color: "white"
    };

    let nav=useNavigate();

   // let token = localStorage.getItem("token");
    
    let {user, logoutUser} = useContext(UserContext);
    

    let logout =()=>{
        logoutUser();
        nav("/");
    }

    let {logoutUser} = useContext(ContextData);

    return (
        <div style={styles}>
            <h1>Doctor Application</h1>
            <div>
                <button><Link to = "/">Home</Link></button>  &nbsp;&nbsp;
                <button onClick={()=>nav("/adddoctor")}>Add Doctor</button> &nbsp;&nbsp;
                {
                    token ?(<button onClick={logoutUser}>Logout</button>) : (<button onClick={()=>nav("/login")}>Login</button>)
                }
            </div>
        </div>
    );
}

export default NavBar;
