import React,{Component} from 'react';
import Employee from './component/Employee';
/*import EmployeeList from './component/EmployeeList';*/
class App extends Component{
  render(){
    return( <div>
      <h1>Employee Details</h1>
<hr />
<Employee />
{/* <EmployeeList /> */}
    </div>
    )
  }
}

export default App;