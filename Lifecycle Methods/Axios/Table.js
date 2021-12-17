import React from 'react';
import axios from 'axios';
  
 class Table extends React.Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        let users = response.data;
        this.setState({ users });
      })
  }
  
  render() {
    return (
      <div>
        <h1>React Axios Get Request Example </h1>
        <table className="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {this.state.users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </table>
      </div>
    )
  }
} 
export default Table;