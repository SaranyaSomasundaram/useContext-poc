import { useContext } from "react";
import { employeeContext } from "../App/App";
import Salary from "../Salary/Salary";
import './Employee.css'

function Employee() {
    let context = useContext(employeeContext);

    return (
        <div class="child">
            <h2>welcome to employee component</h2>
            <span>employee id:</span><span>{context.id}</span><br></br>
            <span>employee name:</span><span>{context.name}</span><br></br>
            <Salary></Salary>
        </div>
    );
}


export default Employee;