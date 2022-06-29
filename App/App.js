import React from 'react';
import Employee from '../Employee/Employee';
import './App.css';

export const employeeContext = React.createContext();

const employee = {
    id: 101,
    name: "saranya",
    location: "namakkal",
    salary: 100000
};
function App() {

    return (
        <div class="border">
            <h2>welcome to app component</h2>
            <employeeContext.Provider value={employee}>
                <Employee></Employee>
            </employeeContext.Provider>
        </div>
    );
}

export default App;