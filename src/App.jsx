import {use, useEffect, useState } from "react";
import Doctorcard from "./component/DoctorsCard";
import Navbar from "./component/NavBar";
import AddDoctor from "./pages/addDoctor";


function App() {
  let[data,setData] = useState([]);
  let[search,setSearch] = useState("");
  useEffect(()=>{
     let res = fetch("https://api-bdti.onrender.com/doctors")
     .then(resp => resp.json())
     .then(result => {setData(result)})
     .catch(error => console.log(error))
     console.log(res);
    
  },[])

  let filteredData = data.filter((d) => {
    let datafilter= d.name.toLowerCase().includes(search.toLowerCase()) 
    return datafilter;
  })
  console.log(filteredData);
  return (
    <>
      <Navbar/>
       {/* <Doctorcard name="Dr. Revathi" salary="500000" gender="Female" age="30" specialization="psychiatry"/> 
       <Doctorcard name="Dr. Jagadeesh" salary="600000" gender="Male" age="35" specialization="Cardiology"/>
      <Doctorcard name="Dr. Bhanu" salary="700000" gender="Female" age="40" specialization="Neurology"/>  */}
    {/* <AddDoctor/> */}
    <label>Search Doctors:</label>
    <input type="text" onChange={(e) => setSearch(e.target.value)} value={search}/>
    {
      filteredData.length > 0 ? 
      filteredData.map((d) => {
        return <Doctorcard key={d._id} name={d.name} salary={d.salary} gender={d.gender} age={d.age} specialization={d.specialization}/>;
      }) : <h1>No doctors found</h1> 
    }
    </>
  )
}

export default App