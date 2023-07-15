
import React, { useState } from "react";
import femaleProfile from "./Img/femaleProfile.jpg";
import maleProfile from "./Img/maleProfile.jpg";
import data from "./data"

function Employee() {
 let [employee, setEmployee] = useState(data);
 const[selectOption,setSelectOption]=useState('')

 const handleSelectChange=(event)=>{
   setSelectOption(event.target.value)
 }

let filterEmployee=selectOption==""?data.filter((e)=>e)
:data.filter((e)=>(selectOption===e.teamName))

console.log(filterEmployee)
 return (
  <main className="container">
   <div className="row justify-content-center mt-3 mb-3">
    <div className="col-6">
     <div>
      <select value={selectOption} onChange={handleSelectChange}>
       <option value="">select </option>
       <option value="TeamA">TeamA</option>
       <option value="TeamB">TeamB</option>
       <option value="TeamC">TeamC</option>
       <option value="TeamD">TeamD</option>
      </select>
     </div>
     <div className="card-collection" >
      {filterEmployee.map((emp,idx) => (
       <div key={emp.id} id={emp.id} className="card m-2" style={{cursor:"pointer"}}>
        {emp.gender==="male"? <img
         src={maleProfile}
         alt={emp.id}
         className="card-img-top"
        /> : <img
         src={femaleProfile}
         alt={emp.id}
         className="card-img-top"
        />}
        <div className="card-body">
         <h5 className="card-title">
          Full Name: {emp.fullName}
         </h5>
         <h6 className="card-title">
          team: {emp.teamName}
         </h6>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </main>
 );
}
export default Employee;
