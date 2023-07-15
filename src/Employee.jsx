import React, { useState } from "react";
import femaleProfile from "./Img/femaleProfile.jpg";
import maleProfile from "./Img/maleProfile.jpg";
import data from "./data"

function Employee() {
  let [employee, setEmployee] = useState(data);

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">

          <div className="card-collection" >
            {employee.map((emp,idx) => (
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
