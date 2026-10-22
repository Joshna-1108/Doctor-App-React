import { useContext } from "react";

function Doctorcard({id,name, gender, age, salary, specialization,handleDelete}) {
    // let btn = {
    //     padding : "10px 15px",
    //     display : "block",
    //     width : "100%",
    //     marginBottom : "5px"
    // }

    let navigator = useNavigate();
    let {user} = useContext.

    return (
        <div className="card">
            <h1>Name: {name}</h1>
            <h1>Salary: {salary}</h1>
            <h1>Gender: {gender}</h1>
            <h1>Age: {age}</h1>
            <h1>Specialization: {specialization}</h1> 
            {
                user ? (
                <>
                    <button style={{backgroundColor:"lightblue"}}>Update Doctor Details </button> 
                    <button style={{backgroundColor:"lightcoral"}} onClick={()=> handleDelete(id)}>Delete Doctor details</button>
                </>
                ) 
                :""
            }
                     
        </div>
    ) 
}

export default Doctorcard;