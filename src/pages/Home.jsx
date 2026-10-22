import { useEffect, useState } from "react";
import Doctorcard from "../component/DoctorsCard";
import axios from "axios";

function Home() {
    let [data, setData] = useState([]);
    let [search, setSearch] = useState("");

    // useEffect(() => {
    //     let res = fetch("https://api-bdti.onrender.com/doctors")
    //         .then(resp => resp.json())
    //         .then(result => { setData(result) })
    //         .catch(error => console.log(error))
    //     console.log(res);
    // }, [])

    async function getDetails() {
        try {
            let res = await axios.get("https://api-bdti.onrender.com/doctors/");
            setData(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDetails()
    }, [])

    let filteredData = data.filter((d) => {
        let datafilter = d.name.toLowerCase().includes(search.toLowerCase());
        return datafilter;
    });

    let handleDelete = async (id) => {
        try {
            let deleteData = await axios.delete("https://api-bdti.onrender.com/doctors/" + id)
            alert("Doctor Details Deleted Successfully...")
            getDetails();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div >
            <label>Search for doctors:</label>
            <input type="text" onChange={(e) => { setSearch(e.target.value) }} value={search} />
            <div className="container">
                {
                    filteredData.length > 0 ?
                        filteredData.map((d) => {
                            return <Doctorcard key={d.id} id={d.id} name={d.name} salary={d.salary} gender={d.gender} age={d.age} specialization={d.specialization} handleDelete={handleDelete} />;
                        }) : <h1>No doctors found</h1>
                }
            </div>
        </div>
    )
}
export default Home;