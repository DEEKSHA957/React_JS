import React, {Component} from 'react';

class EmployeeList extends Component{
    render()
    {
        return(
            <div>
                <h5>Component name:employee list</h5>
<>{JSON.stringify(this.props)}</>
<table border="1">
    <thead>
<tr>
<th>Name</th>
<th>Salary</th>
</tr>
    </thead>
    <tbody>
{this.props.emp.map((employee)=>{
    return(
    <tr>
    <td>{employee.name}</td>
<td>{employee.sal}</td>
</tr>
);
})}
    </tbody>
</table>
            </div>
        )
    }
}
export default EmployeeList;