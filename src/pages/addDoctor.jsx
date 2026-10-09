import { useState } from "react";

function AddDoctor(){
    let [name,setName] = useState("");
    let [salary,setSalary] = useState("");
    let [gender,setGender] = useState("");
    let [age,setAge] = useState("");
    let [specialization,setSpecialization] = useState("");


    let handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Name:"+name);
        console.log("Salary:"+salary);
        console.log("Gender:"+gender);
        console.log("Age:"+age);
        console.log("Specialization:"+specialization);

    }
    
    return(
        <div>
            <form>
                <h1>Add Doctor</h1>
                <input type="text" placeholder="Enter your Name" onChange={(e)=>{setName(e.target.value)}}/> <br /> <br />
                <input type="text" placeholder="Enter your Salary"/> <br /> <br />
                <input type="text" placeholder="Enter your Gender"/> <br /> <br />
                <input type="text" placeholder="Enter your Age"/> <br /> <br />
                <input type="text" placeholder="Enter your Specialization"/> <br /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}
export default AddDoctor;