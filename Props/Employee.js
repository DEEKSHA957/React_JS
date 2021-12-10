import React, {Component} from "react";
import EmployeeList from "./EmployeeList";
class Employee extends Component{
    employees=[
    {name:"Ram", sal:70000},
    {name:"Deeksha", sal:30000},
    {name:"Vicky", sal:78000},
    {name:"Sanju", sal:38000},
];
    render()
    {
        return(
            <div>
                <h1>Component name:employee</h1>
                <hr/>
<EmployeeList emp={this.employees} />
            </div>
        )
    }
}
export default Employee;