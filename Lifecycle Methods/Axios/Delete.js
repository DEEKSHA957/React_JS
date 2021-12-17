import React from 'react';
import axios from 'axios';

class Delete extends React.Component {
  state = {
    id: []
  }

    ChangeHandler = event => {
    this.setState({ id: event.target.value });
  }

 SubmitHandler = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
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
            Person ID:
            <input type="number" id="id" onChange={this.ChangeHandler} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}
export default Delete;