import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function AddDoctor(){
    let[name,setName]=useState("");
    let[age,setAge]=useState("");
    let[salary,setSalary]=useState("");
    let[gender,setGender]=useState("");
    let[specialization,setSpecialization]=useState("");
    let nav=useNavigate();

    let handleSubmit = async(e) =>{
        e.preventDefault();
        let addDoctor= {name,age,salary,specialization,gender}
        let data=await axios.post("https://api-bdti.onrender.com/doctors",addDoctor)
        alert("Doctor Added Successfully.......")
        nav("/")
        setName("")
        setAge("")
        setSalary("")
        setGender("")
        setSpecialization("")
    }
    return(
        <>
            <div>
                <h1>Add Doctor</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br/><br/>
                    <input type="text" placeholder="enter your salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}} /> <br/><br/>
                    <input type="text" placeholder="enter your gender" value={gender} onChange={(e)=>{setGender(e.target.value)}} /> <br/><br/>
                    <input type="text" placeholder="enter your age" value={age} onChange={(e)=>{setAge(e.target.value)}} /> <br/><br/>
                    <input type="text" placeholder="enter your specialization" value={specialization} onChange={(e)=>{setSpecialization(e.target.value)}} /> <br/><br/>
                    <input type="submit"/>
                </form>
            </div>
        </>
    )
}

export default AddDoctor;