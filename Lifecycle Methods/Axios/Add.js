import React from 'react';
import axios from 'axios';

 class Add extends React.Component {
  state = {
    name: ''
  }

  ChnageHandler = event => {
    this.setState({ name: event.target.value });
  }

  SubmitHandler = event => {
    event.preventDefault();

    let user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.SubmitHandler}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.ChnageHandler} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
export default Add;