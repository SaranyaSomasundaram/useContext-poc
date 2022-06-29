<hr>
USECONTEXT IN REACT JS:
<hr>
1.In react js useContext() is used to avoid the prop drilling.
context is used to pass data from nested level component without using props.<br>
2.Three steps for use context;
       1.creating context
       2.creating provider
       3.consuming(useContext)<br>

3.you can pass the data from parenet to child component we use prop(stands for property,it is an object).<br>

4.props transfer data in one-way flow(only from parent ot child component).it is not possible to pass daa from child to parent.
<hr>
1.create the app component(it is an root component)<br>
App.js<br>

import React from 'react';<br>
import Employee from '../Employee/Employee';<br>
import './App.css';<br>

//creating the context.in this context we have an provider and consumer.<br>
export const employeeContext = React.createContext();<br>

//creating an employee variable and pass the object.this object is accessable in all nested component by using createContext().<br>
const employee = {
    id: 101,
    name: "saranya",
    location: "namakkal",
    salary: 100000
};<br>
function App() {<br>

    return (
        <div class="border">
            <h2>welcome to app component</h2><br> 

      //every context object comes with provider.provider is created in root level component(that is App component).<br>

     //provider has an value property.in which data is pass in an value it is accessable in all the component within the provider.

            <employeeContext.Provider value={employee}>

            //now we will call Employee component from App component.
                <Employee></Employee>

            </employeeContext.Provider>
        </div>
    );
}
//App component is render in index.js.<br>
export default App;<br>
<hr>
2.creating Employee component.<br>
Employee.js<br>

import { useContext } from "react";<br>
import { employeeContext } from "../App/App";<br>
import Salary from "../Salary/Salary";<br>
import './Employee.css'<br>

function Employee() {<br>
    //you can access employeeContext hear using useContex hooks.<br>
    //in useContext hooks we will pass the employeeContext.using this context you can access employee data from Employee component.<br>
    let context = useContext(employeeContext);<br>

    return (
        <div class="child">
            <h2>welcome to employee component</h2>

            //display employee detail in Employee component.
            <span>employee id:</span><span>{context.id<span><br></br>
             <span>employee name:</span><span>{context.name}<span><br></br>

            <Salary></Salary>
        </div>
    );
}


export default Employee;<br>
<hr>
3.create salary component.<br>
Salary.js<br>

import { useContext } from "react";<br>
import { employeeContext } from "../App/App";<br>
import './Salary.css'<br>

function Salary() {<br>
    //you can access employeeContext hear using useContex hooks.
    //in useContext hooks we will pass the employeeContext.using this context you can access employee data from Salary component.
    let context = useContext(employeeContext)
    return (
        <div class="grandchild">
            <h2>welcome to salary component</h2>
            //display employee detail from salary component
            <span>employee id:</span><span>{context.id}</span><br></br>
            <span>employee salary:</span><span>{context.salary}</span>

        </div>
    );
}

export default Salary;<br>

Screenshot:
<img src="./Screenshot/capture.png">
