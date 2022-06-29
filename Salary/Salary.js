import { getDefaultNormalizer } from "@testing-library/react";
import { useContext } from "react";
import { employeeContext } from "../App/App";
import './Salary.css'

function Salary() {
    let context = useContext(employeeContext)
    return (
        <div class="grandchild">
            <h2>welcome to salary component</h2>
            <span>employee id:</span><span>{context.id}</span><br></br>
            <span>employee salary:</span><span>{context.salary}</span>

        </div>
    );
}

export default Salary;