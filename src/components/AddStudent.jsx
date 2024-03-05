import React, { useState } from "react";
import "../styles/addStudent.css"

export default ({addStudent}) => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [major, setMajor] = useState();
    const [uni, setUni] = useState();
    const [avgGrade, setAvgGrade] = useState();
    return (
        <div className="add-student">
            <span>Name:</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <span>Age:</span>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <span>Major:</span>
            <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
            <span>University:</span>
            <input type="text" value={uni} onChange={(e) => setUni(e.target.value)} />
            <span>Average grade:</span>
            <input type="number" value={avgGrade} onChange={(e) => setAvgGrade(e.target.value)} />
            <button onClick={() => addStudent({
                name, age, major, university: uni, averageGrade: avgGrade
            })}>Add</button>
        </div>
    );
}