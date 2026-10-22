import { useNavigate, useParams } from "react-router-dom";

function UpdateDoctor(){
    let { id }= useParams();
    let [name,setName] = useSttate("");
    let [salary,setSalary] = useState("");
    let [gender,setGender] = useState("");
    let [age,setAge] = useState("");
    let [specialization,setSpecialization] = useState("");
    let [data,setData] = useState("");
    let nav = useNavigate();
    
    let getDetails = async()=>{
        let res = await axios.get('https://api-bdti.onrender.com/doctors/${id}')
        let data = res.data;
        setName(data.name ?? "")
        setAge(data.age ?? "")
        setGender(data.gender ?? "")
        setSalary(data.salary ?? "")
        setSpecialization(data.specialization ?? "")
    }

    useEffect(()=>{
        getDetails()
    },[])

    let handleUpdate =async(e)=>{
        try{
            e.preventDefault();
            console.log("Name:" +name);
            console.log("Salary:" +salary);
            console.log("Gender:" +gender);
            console.log("Age :" +age);
            console.log("Specialization:" +specialization);

            let UpdateDoctor = {name, salary,gender,age,specialization}
            let res = await axios.put('https://api-bdti.onrender.com/doctors/${id}', UpdateDoctor)
            alert("Doctor details updated succesfully..")

            setName("");
            setAge("");
            setGender("");
            setAge("");
            setSpecialization("");
            
        }catch(e){
            console.log(e);        
        }
    }

    return(
        <>
            <h1>Welcome to doctor update page...</h1>
            <h1>Doctor ID:{id}</h1>
        </>
    )
}

export default UpdateDoctor;