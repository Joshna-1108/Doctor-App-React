function Doctorcard({name, gender, age, salary, specialization}) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Salary: {salary}</h1>
            <h1>Gender: {gender}</h1>
            <h1>Age: {age}</h1>
            <h1>Specialization: {specialization}</h1>
            <hr />
        </div>
    );
}

export default Doctorcard;